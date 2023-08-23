<script setup>
defineProps({ is: { type: String, default: 'div' } });
</script>

<template>
    <component :is=is class='container mx-auto max-md:px-4'>
        <slot />
    </component>
</template>
