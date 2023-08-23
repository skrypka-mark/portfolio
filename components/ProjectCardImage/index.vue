<script setup>
const props = defineProps({ image: String, visible: Boolean, hovered: Boolean, imageRef: String });
defineEmits(['mouseover', 'mouseout']);
</script>

<template>
    <div
        :class='[$style[`project-card__image-container`], { [$style.hidden]: !visible }]'
        @click='$emit(`mouseover`)'
    >
        <img :src=image :class='[$style[`project-card__image`], { [$style.hovered]: hovered }]' ref=imageRef />
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

    @media (max-width: $lg) {
        width: 100%;
        height: auto;
        aspect-ratio: 1.6 / 1;
    }

    &.hidden {
        opacity: 0;
    }
    & > .project-card__image {
        width: 100%;
        // height: auto;

        transform: translateY(0);
        transition: transform 2s ease-in-out;

        &.hovered {
            --translate-y: calc(-100% + 24rem);

            transform: translateY(var(--translate-y));
            transition: transform 15s linear;
        }
    }
}
</style>
