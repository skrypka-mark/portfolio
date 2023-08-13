<script setup>
const props = defineProps({ open: Boolean, imageVisible: Boolean, image: String, imageSpecs: Object });
const emits = defineEmits(['close', 'toggleImageVisibility']);

const transitionend = () => {
    if(!props.open) {
        // imageVisible.value = false;
        emits('toggleImageVisibility', false);
    }
};
</script>

<template>
    <Teleport to='body'>
        <!-- <div :class='$style[`project-image-modal`]'> -->
            <!-- <Transition name='backdrop' mode='out-in' @before-enter='isImageVisible = true'> -->
            <Transition name='backdrop' mode='out-in' @before-enter='emits(`toggleImageVisibility`, true)'>
                <div :class='$style.backdrop' @click='emits(`close`)' v-if=open />
            </Transition>
            <!-- <Transition name='fade-image' mode='out-in'> -->
                <img :src=image :class='[$style.image, { [$style.open]: open, [$style.close]: !open }]' @animationend=transitionend v-if=imageVisible />
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
.fade-image {
    &-enter-active,
    &-leave-active {
        transition: all $transition;
    }

    &-enter-from {
        opacity: 0;
    }
    &-leave-to {
        opacity: 0;
    }

    // &-enter-to {
    //     opacity: 1;
    // }
    // &-leave-from {
    //     opacity: 1;
    // }
}
.backdrop {
    &-enter-active,
    &-leave-active {
        transition: all $transition;
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
        top: var(--header-height);
        left: 10%;
        width: 80%;
        height: 80%;
        border-radius: $border-radius-lg;
    }
}
@keyframes scale-down {
    from {
        top: var(--header-height);
        left: 10%;
        width: 80%;
        height: 80%;
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

// .project-image-modal {
    // position: fixed;
    // inset: 0;

    .image {
        position: fixed;
        // top: var(--header-height);
        // left: 10%;

        // width: 80%;
        // height: 80%;
        // border-radius: $border-radius-lg;

        &.open {
            top: var(--header-height);
            left: 10%;

            width: 80%;
            height: 80%;
            border-radius: $border-radius-lg;

            animation: scale-up $transition;
        }
        &.close {
            top: v-bind('`${imageSpecs?.top}px`');
            left: v-bind('`${imageSpecs?.left}px`');

            width: v-bind('`${imageSpecs?.width}px`');
            height: v-bind('`${imageSpecs?.height}px`');
            border-radius: v-bind('imageSpecs?.borderRadius');

            animation: scale-down $transition;
        }
    }
// }
.backdrop {
    position: fixed;
    inset: 0;
    // width: 100vw;
    // height: 100vh;
    background: rgba(0, 0, 0, .5);
}
</style>
