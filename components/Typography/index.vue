<script setup>
import { breakpointsTailwind } from '@vueuse/core';

const props = defineProps({ variant: String, is: [Object, String] });

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller('lg');

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
    <component :is=Component :class='{ [$style[variant]]: !!variant, [$style.mobile]: isMobile }'>
        <slot />
    </component>
</template>

<style lang='scss' module src='./styles.module.scss' />
