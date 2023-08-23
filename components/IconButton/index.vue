<script setup>
defineProps({ iconName: String });
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

<style module lang='scss'>
.icon-button {
    display: flex;
    align-items: center;
    column-gap: 5px;

    color: inherit;
}
</style>
