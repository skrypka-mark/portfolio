<script setup>
defineProps({ is: { type: String, default: 'div' } });
</script>

<template>
    <component :is=is :class='$style.container'>
        <slot />
    </component>
</template>

<style module lang='scss'>
.container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    // padding: 0 120px;
}
</style>
