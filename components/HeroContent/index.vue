<script setup lang='ts'>
import { SkillIconsMapping } from '~/enums/SkillsMapping';

interface IHeroContentProps {
    title: string;
    description: string;
    skills: (keyof typeof SkillIconsMapping)[];
}

defineProps<IHeroContentProps>();

const { getViewsTotal } = usePageViews();

const totalViews = ref(await getViewsTotal());
</script>

<template>
    <div :class='$style[`hero-content`]'>
        <div :class='$style.heading'>
            <Typography variant='h1' :class='$style.title'>
                {{ title }}
            </Typography>
            <Typography variant='body' :class='$style.body'>
                {{ description }}
            </Typography>
            <div class='max-xl:hidden absolute right-0 flex items-center gap-x-[4px]' v-if='$route.query.showViews'>
                <Icon name='fluent:eye-12-filled' size='1rem' color='var(--color-font-body)' />
                <Typography variant='body'>
                    {{ totalViews }}
                </Typography>
            </div>
        </div>
        <div :class='$style[`socials-group`]' class='max-xl:justify-center'>
            <a href='https://www.linkedin.com/in/mark-skrypka' target='_blank'>
                <Icon name='mdi:linkedin' size='2rem' />
            </a>
            <a href='https://github.com/skrypka-mark' target='_blank'>
                <Icon name='mdi:github' size='2rem' />
            </a>
            <a href='https://www.upwork.com/freelancers/markskrypka' target='_blank'>
                <Icon name='cib:upwork' size='2rem' />
            </a>
        </div>
        <SkillsList :skills=skills :class='$style[`skills-group`]' class='max-xl:justify-center'>
            <template #additional>
                <UiLink href='https://www.figma.com/file/GLEk3wywgKUrzIUcSYbERS/Portfolio' target='_blank'>
                    <Skill skill='figma' />
                </UiLink>
            </template>
        </SkillsList>
    </div>
</template>

<style module lang='scss' src='./styles.module.scss' />
