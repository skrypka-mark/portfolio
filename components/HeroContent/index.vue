<script setup>
import Link from '~/components/Link';

const skills = [
    'vue',
    'react',
    'nuxt'
];
</script>

<template>
    <div :class='$style[`hero-content`]'>
        <div :class='$style.heading'>
            <Typography variant='h1' :class='$style.title'>Frontend Developer</Typography>
            <Typography variant='body'>
                Hi, I'm Mark Skrypka. A passionate Frontend Developer based in Ukraine
            </Typography>
        </div>
        <div :class='$style[`socials-group`]'>
            <a href='https://www.linkedin.com/in/mark-skrypka-a19b051bb' target='_blank'>
                <Icon name='mdi:linkedin' size='2rem' />
            </a>
            <a href='https://github.com/skrypka-mark' target='_blank'>
                <Icon name='mdi:github' size='2rem' />
            </a>
            <a href='https://www.upwork.com/freelancers/~0170e4ec789ff7ddfc' target='_blank'>
                <Icon name='cib:upwork' size='2rem' />
            </a>
        </div>
        <SkillsList :skills=skills class='mt-auto'>
            <template #additional>
                <Link href='https://figma.com/' target='_blank'>
                    <Skill skill='figma' />
                </Link>
            </template>
        </SkillsList>
    </div>
</template>

<style module lang='scss'>
.hero-content {
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    height: 80%;

    & > .heading {
        display: flex;
        flex-direction: column;
        row-gap: 15px;

        .title {
            text-transform: uppercase;
        }
    }
    & > .socials-group {
        display: flex;
        column-gap: 10px;
    }
}
</style>
