<script setup lang='ts'>
import { useMobile } from '~/composables/useMobile';

enum VariantMapping {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    body = 'p',
    button = 'span',
    caption = 'span',
    link = 'p'
}

interface ITypographyProps {
    variant?: keyof typeof VariantMapping;
    is?: object | string;
}

const props = defineProps<ITypographyProps>();

const isMobile = useMobile() as Ref<boolean>;

const Component = props.is ?? VariantMapping[props.variant ?? 'body'];
</script>

<template>
    <component :is=Component :class='{ [$style[variant ?? `body`]]: !!variant, [$style.mobile]: isMobile }'>
        <slot />
    </component>
</template>

<style module lang='scss' src='./styles.module.scss' />
