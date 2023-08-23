<script setup>
defineProps({ is: { type: String, default: 'div' } });
</script>

<template>
    <component :is=is class='container mx-auto max-md:px-4'>
        <slot />
    </component>
</template>

<style module lang='scss'>
// .container {
//     position: relative;
//     max-width: 1200px;
//     margin: 0 auto;
//     // padding: 0 120px;

//     @media (max-width: $xl) {
//         margin-inline: 1rem;
//     }
// }
</style>
