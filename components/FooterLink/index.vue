<script setup lang='ts'>
interface IFooterLinkProps {
    iconName: string;
    name: string;
    description: string;
    link: string;
}

defineProps<IFooterLinkProps>();
</script>

<template>
    <article :class='$style[`footer-link`]'>
        <Icon :name=iconName size='2rem' color='var(--color-main)' />
        <div class='flex flex-col gap-y-1.5'>
            <a :href=link target='_blank'>
                <Typography variant='h3' class='capitalize'>
                    {{ name }}
                </Typography>
                <Typography variant='body'>
                    {{ description }}
                </Typography>
            </a>
        </div>
    </article>
</template>

<style module lang='scss'>
.footer-link {
    display: flex;
    column-gap: 1rem;
    align-items: flex-start;
}
</style>
