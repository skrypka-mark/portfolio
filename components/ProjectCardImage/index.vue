<script setup lang='ts'>
interface IProjectCardImageProps {
    image: string;
    visible: boolean;
    hovered: boolean;
}

defineProps<IProjectCardImageProps>();
defineEmits<{ (event: 'click'): void; }>();
</script>

<template>
    <div
        :class='[$style[`project-card__image-container`], { [$style.hidden]: !visible }]'
        @click='$emit(`click`)'
    >
        <img
            :src=image
            :class='[$style[`project-card__image`], { [$style.hovered]: hovered }]'
            loading='lazy'
        />
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

        transform: translateY(0);
        transition: transform 2s ease-in-out;
    }
}
</style>
