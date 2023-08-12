<script setup>

const props = defineProps({ variant: String, is: [Object, String] });

const variantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    body: 'p',
    button: 'span',
    caption: 'span',
    link: 'p'
};

const Component = props.is ?? variantMapping[props.variant] ?? 'span';
</script>

<template>
    <component :is=Component :class='{ [$style[variant]]: !!variant }'>
        <slot :class='{ [$style[variant]]: !!variant }' />
    </component>
</template>

<style lang='scss' module src='./styles.module.scss' />
