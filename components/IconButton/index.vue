<script setup lang='ts'>
interface IIconButtonProps {
    iconName: string;
}

defineProps<IIconButtonProps>();
</script>

<template>
    <a target='_blank'>
        <button :class='$style[`icon-button`]'>
            <Icon :name=iconName size='1.7rem' />
            <Typography variant='button'>
                <slot />
            </Typography>
        </button>
    </a>
</template>

<style module lang='scss' src='./styles.module.scss' />
