<script setup lang='ts'>
interface IContainerProps {
    is?: string;
}

withDefaults(
    defineProps<IContainerProps>(),
    { is: 'div' }
);
</script>

<template>
    <component :is=is class='relative container max-w-screen-xl mx-auto px-4'>
        <slot />
    </component>
</template>
