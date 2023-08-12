<script setup>
defineProps({ iconName: String, name: String, link: String });
</script>

<template>
    <article :class='$style[`footer-link`]'>
        <Icon :name=iconName size='2rem' color='var(--color-main)' />
        <div class='flex flex-col gap-y-1.5'>
            <Typography variant='h3' class='capitalize'>
                {{ name }}
            </Typography>
            <Typography variant='body'>
                {{ link }}
            </Typography>
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
