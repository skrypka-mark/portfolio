<script setup>
const props = defineProps({
    open: Boolean,
    image: String,
    imageVisible: Boolean,
    imageSpecs: Object
});
const emits = defineEmits(['close', 'toggleImageVisibility']);

const timeout = ref(null);
const imageTransition = ref(false);

// const projectImageModalTransitionend = () => {
    // if(!props.open) {
        // timeout.value = setTimeout(() => emits('toggleImageVisibility', false), 1000);
    // }
// };
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
        <!-- <div :class='$style[`project-image-modal`]'> -->
            <!-- <Transition name='backdrop' mode='out-in' @before-enter='isImageVisible = true'> -->
            <Transition
                name='backdrop'
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
            <!-- <Transition name='fade-image' mode='out-in'> -->
                <div
                    :class='[$style[`image-container`], { [$style.open]: open, [$style.close]: !open }]'
                    :style='{ zIndex: open ? 10 : 9 }'
                    @click=close
                    v-if=imageVisible
                >
                    <img
                        :src=image
                        :class='[
                            $style.image, {
                                [$style.open]: imageTransition,
                                [$style.close]: !imageTransition && !open
                            }
                        ]'
                        @transitionend=imageModalTransitionend
                    />
                </div>
            <!-- </Transition> -->
        <!-- </div> -->
    </Teleport>
</template>

<style lang='scss'>
// .scale-image {
//     &-enter-active,
//     &-leave-active {
//         transition: all 2s ease-out;
//     }

//     &-enter-to,
//     &-leave-from {
//         transform: translateX(10%) translateY(var(--header-height));
//         // position: fixed;

//         // top: var(--header-height);
//         // left: 10%;

//         width: 80%;
//         height: 80%;
//         border-radius: $border-radius-lg;
//     }
//     &-enter-from,
//     &-leave-to {
//         transform: translateX(v-bind('`${imageSpecs?.left}px`')) translateY(v-bind('`${imageSpecs?.top}px`'));
//         // position: fixed;

//         // top: v-bind('`${imageSpecs?.top}px`');
//         // left: v-bind('`${imageSpecs?.left}px`');

//         width: v-bind('`${imageSpecs?.width}px`');
//         height: v-bind('`${imageSpecs?.height}px`');
//         border-radius: v-bind('imageSpecs?.borderRadius');
//     }
// }
// .fade-image {
//     &-enter-active,
//     &-leave-active {
//         transition: all $transition;
//     }

//     &-enter-from,
//     &-leave-to {
//         opacity: 0;
//     }
// }
.backdrop {
    &-enter-active,
    &-leave-active {
        transition: all $transition-lg;
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
    }
}
</style>
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
@keyframes scroll-down {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(calc(-100% + 90vh));
    }
}
@keyframes scroll-top {
    from {
        transform: translateY(calc(-100% + 90vh));
    }
    to {
        transform: translateY(0);
    }
}

.image-container {
        position: fixed;
        // top: var(--header-height);
        // left: 10%;

        // width: 80%;
        // height: 80%;
        // border-radius: $border-radius-lg;

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

            // & > .image {
            //     --translate-y: calc(-100% + 90vh);

            //     transform: translateY(var(--translate-y));
            //     transition: transform 15s linear;
            // }
        }
        &.close {
            top: v-bind('`${imageSpecs?.top}px`');
            left: v-bind('`${imageSpecs?.left}px`');

            width: v-bind('`${imageSpecs?.width}px`');
            height: v-bind('`${imageSpecs?.height}px`');
            border-radius: v-bind('imageSpecs?.borderRadius');

            animation: scale-down $transition-lg;

            // & > .image {
                // animation: scroll-down 2s ease-in-out alternate-reverse;

                // transform: translateY(0);
            // }
        }
    & > .image {
        transform: v-bind('imageSpecs?.transform');

        &.open {
            // animation: scroll-down 15s linear;

            --translate-y: calc(-100% + 90vh);
            transform: translateY(var(--translate-y));
            transition: transform 15s linear;
        }
        &.close {
            transform: translateY(0);
            transition: transform .5s ease-in-out;
        }

        // position: absolute;
        // top: 0;
        // transform: translateY(0px);
        // transition: transform 2s ease-in-out;

        // &:hover {
        //     --translate-y: calc(-100% + 90vh);
        //     // --translate-y: calc(-100% + 90vh);

        //     transform: translateY(var(--translate-y));
        //     // top: var(--translate-y);
        //     transition: transform 15s linear;
        // }
    }
}
.backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .7);
}
</style>
