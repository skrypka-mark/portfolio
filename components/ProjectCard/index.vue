<script setup>
defineProps({ name: String });
</script>

<template>
    <article :class='$style[`project-card`]'>
        <img src='/img/project-1.png' />
        <div class='flex flex-col items-center px-[5.5rem]'>
            <Typography variant='h3' class='mb-4'>
                {{ name }}
            </Typography>
            <Typography variant='body' class='mb-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <SkillsList :skills='[`nuxt`, `express`, `scss`]' class='mb-12' />
            <div :class='$style[`action-links`]' class='flex gap-x-12'>
                <div class='flex gap-x-3'>
                    <Icon name='mdi:github' size='1.5rem' />
                    <Icon name='devicon:figma' size='1.5rem' />
                </div>
                <IconButton iconName='fluent:share-20-filled'>Preview</IconButton>
            </div>
        </div>
    </article>
</template>

<style module lang='scss'>
.project-card {
    display: flex;
    align-items: center;

    background: rgba(248, 248, 248, .4);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .07);
    border-radius: $border-radius;
    overflow: hidden;

    & > .action-links {}
}
</style>
