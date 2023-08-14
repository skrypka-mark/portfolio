<script setup>
defineProps({ image: String, visible: Boolean });
defineEmits(['mouseover', 'mouseout']);
</script>

<template>
    <div
        :class='[$style[`project-card__image-container`], { [$style.hidden]: !visible }]'
        @mouseover='$emit(`mouseover`)'
        @mouseout='$emit(`mouseout`)'
    >
        <img :src=image :class='$style[`project-card__image`]' v-if=visible />
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
    }
}
</style>
