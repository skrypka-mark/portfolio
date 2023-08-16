<script setup>
defineProps({ image: String, visible: Boolean, imageRef: String });
defineEmits(['mouseover', 'mouseout']);
</script>

<template>
    <div
        :class='[$style[`project-card__image-container`], { [$style.hidden]: !visible }]'
        @mouseover='$emit(`mouseover`)'
        @mouseout='$emit(`mouseout`)'
        @click='$emit(`mouseover`)'
    >
        <img :src=image :class='$style[`project-card__image`]' ref=imageRef />
    </div>
</template>

<style module lang='scss'>
.project-card__image-container {
    height: 100%;
    aspect-ratio: 3.2 / 1;
    border-radius: $border-radius-sm;
    box-shadow: $box-shadow-secondary;
    cursor: pointer;
    overflow: hidden;

    &.hidden {
        opacity: 0;
    }
    & > .project-card__image {
        width: 100%;
        // height: auto;

        transform: translateY(0px);
        transition: transform 2s ease-in-out;

        &:hover {
            --translate-y: calc(-100% + 90vh);

            transform: translateY(var(--translate-y));
            transition: transform 15s linear;
        }
    }
}
</style>
