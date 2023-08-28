<script setup lang='ts'>
import type { ImageSpecsType } from '~/types/ImageSpecsType';

interface IProjectImageModalProps {
    open: boolean;
    image: string;
    imageVisible: boolean;
    imageSpecs: ImageSpecsType | null;
}

const props = defineProps<IProjectImageModalProps>();
const emits = defineEmits<{
    (event: 'close'): void;
    (event: 'toggleImageVisibility', value: boolean): void;
}>();

const imageContainerRef = ref(null);

const imageTransition = ref(false);
const imageContainerHovered = useElementHover(imageContainerRef);

const imageModalTransitionend = () => {
    if(!props.open) {
        emits('toggleImageVisibility', false);
    }
};
const close = () => {
    emits('close');
};

watch(() => props.imageVisible, value => {
    document.body.classList[value ? 'add' : 'remove']('prevent-scroll');
});
</script>

<template>
    <Teleport to='body'>
        <Transition
            name='backdrop-transition'
            mode='out-in'
            @before-enter='emits(`toggleImageVisibility`, true)'
            @after-enter='imageTransition = true'
            @after-leave='imageTransition = false'
        >
            <div
                :class='$style.backdrop'
                :style='{ zIndex: open ? 8 : 7 }'
                @click=close
                v-if=open
            />
        </Transition>
        <div
            :class='[$style[`image-container`], { [$style.open]: open, [$style.close]: !open }]'
            :style='{ zIndex: open ? 10 : 9 }'
            @click=close
            ref=imageContainerRef
            v-if=imageVisible
        >
            <img
                :src=image
                :class='[
                    $style.image, {
                        [$style.open]: imageTransition,
                        [$style.close]: !imageTransition && !open,
                        [$style.hovered]: imageTransition && open && imageContainerHovered,
                        [$style.unhovered]: !imageTransition && open && !imageContainerHovered
                    }
                ]'
                loading='lazy'
                @transitionend=imageModalTransitionend
            />
        </div>
    </Teleport>
</template>

<style module lang='scss'>
@keyframes scale-up {
    from {
        top: v-bind('`${imageSpecs?.top}px`');
        left: v-bind('`${imageSpecs?.left}px`');
        width: v-bind('`${imageSpecs?.width}px`');
        height: v-bind('`${imageSpecs?.height}px`');
        border-radius: v-bind('imageSpecs?.borderRadius');
    }
    to {
        top: 5%;
        left: 10%;
        width: 80%;
        height: 90%;
        border-radius: $border-radius-lg;
    }
}
@keyframes scale-down {
    from {
        top: 5%;
        left: 10%;
        width: 80%;
        height: 90%;
        border-radius: $border-radius-lg;
    }
    to {
        top: v-bind('`${imageSpecs?.top}px`');
        left: v-bind('`${imageSpecs?.left}px`');
        width: v-bind('`${imageSpecs?.width}px`');
        height: v-bind('`${imageSpecs?.height}px`');
        border-radius: v-bind('imageSpecs?.borderRadius');
    }
}

@keyframes scale-up-mobile {
    from {
        top: v-bind('`${imageSpecs?.top}px`');
        left: v-bind('`${imageSpecs?.left}px`');
        width: v-bind('`${imageSpecs?.width}px`');
        height: v-bind('`${imageSpecs?.height}px`');
        border-radius: v-bind('imageSpecs?.borderRadius');
    }
    to {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
}
@keyframes scale-down-mobile {
    from {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
    to {
        top: v-bind('`${imageSpecs?.top}px`');
        left: v-bind('`${imageSpecs?.left}px`');
        width: v-bind('`${imageSpecs?.width}px`');
        height: v-bind('`${imageSpecs?.height}px`');
        border-radius: v-bind('imageSpecs?.borderRadius');
    }
}

.image-container {
        position: fixed;

        box-shadow: $box-shadow-secondary;
        cursor: pointer;
        overflow: hidden;

        &.open {
            top: 5%;
            left: 10%;

            width: 80%;
            height: 90%;
            border-radius: $border-radius-lg;

            animation: scale-up $transition-lg;

            @media (max-width: $lg) {
                top: 0;
                left: 0;

                width: 100%;
                height: 100%;

                border-radius: 0;
                animation: scale-up-mobile $transition-lg forwards;
            }
        }
        &.close {
            top: v-bind('`${imageSpecs?.top}px`');
            left: v-bind('`${imageSpecs?.left}px`');

            width: v-bind('`${imageSpecs?.width}px`');
            height: v-bind('`${imageSpecs?.height}px`');
            border-radius: v-bind('imageSpecs?.borderRadius');

            animation: scale-down $transition-lg;

            @media (max-width: $lg) {
                animation: scale-down-mobile $transition-lg forwards;
            }
        }
    & > .image {
        transform: v-bind('imageSpecs?.transform');
        transition: transform 15s linear;

        &.hovered {
            --translate-y: calc(-100% + 90vh);

            @media (max-width: $lg) {
                --translate-y: calc(-100% + 100vh);
            }

            transform: translateY(var(--translate-y));
        }
        &.unhovered {
            transform: translateY(0);
        }
        &.close {
            transform: translateY(0);
            transition: transform .5s ease-in-out;
        }
    }
}

.backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .7);
}
</style>
