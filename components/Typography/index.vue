<script setup>

const props = defineProps({ variant: String });

const variantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    body: 'p',
    button: 'span',
    caption: 'span'
};

const Component = variantMapping[props.variant] ?? 'span';
</script>

<template>
    <component :is=Component :class='{ [$style[variant]]: !!variant }'>
        <slot :class='{ [$style[variant]]: !!variant }' />
    </component>
</template>

<style lang='scss' module src='./styles.module.scss' />
