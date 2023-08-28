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

<style module lang='scss' src='./styles.module.scss' />
