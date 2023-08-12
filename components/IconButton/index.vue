<script setup>
defineProps({ iconName: String });
</script>

<template>
    <button :class='$style[`icon-button`]'>
        <Icon :name=iconName size='1.7rem' />
        <Typography variant='button'>
            <slot />
        </Typography>
    </button>
</template>

<style module lang='scss'>
.icon-button {
    display: flex;
    align-items: center;
    column-gap: 5px;
}
</style>
