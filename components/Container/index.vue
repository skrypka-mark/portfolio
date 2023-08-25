<script setup>
defineProps({ is: { type: String, default: 'div' } });
</script>

<template>
    <component :is=is class='relative container max-w-screen-xl mx-auto px-4'>
        <slot />
    </component>
</template>
