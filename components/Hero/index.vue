<script setup lang='ts'>
import { SkillIconsMapping } from '~/enums/SkillsMapping';

interface IHero {
    title: string;
    description: string;
    skills: string[];
}

const profileType = inject<Ref<string>>('profile-query');

const frontendHero = {
    title: 'Frontend Developer',
    description: 'Hi, I\'m Mark Skrypka. A purposeful Frontend Developer based in Ukraine.',
    skills: [
        'react',
        'react native',
        'vue',
        'nuxt',
        'next',
        'express'
    ]
};
const backendHero = {
    title: 'Backend Developer',
    description: 'Hi, I\'m Mark Skrypka. A purposeful Backend Developer based in Ukraine.',
    skills: [
        'node',
        'express',
        'sequelize'
    ]
};
const designHero = {
    title: 'UI/UX Designer',
    description: 'Hi, I\'m Mark Skrypka. A purposeful UI/UX Designer based in Ukraine.',
    skills: [
        'react',
        'react native',
        'vue',
        'nuxt',
        'next',
        'express'
    ]
};

const hero: ComputedRef<IHero> = computed(() => {
    switch(profileType?.value) {
        case 'backend':
            return backendHero;
            break;
        case 'design':
            return designHero;
            break;
        default:
            return frontendHero;
    }
});
</script>

<template>
    <Container>
        <SvgoEllipse1 class='ellipse1' />
        <section id='home' :class='$style.hero'>
            <div :class='$style.wrapper'>
                <HeroImage />
                <HeroContent
                    :title=hero.title
                    :description=hero.description
                    :skills='(hero.skills as (keyof typeof SkillIconsMapping)[])'
                />
            </div>
        </section>
    </Container>
</template>

<style module lang='scss' src='./styles.module.scss' />
