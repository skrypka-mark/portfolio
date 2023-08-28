<script setup lang='ts'>
import { SkillIconsMapping } from '~/enums/SkillsMapping';

interface ISkillsListProps {
    skills: (keyof typeof SkillIconsMapping)[];
}

defineProps<ISkillsListProps>();
</script>

<template>
    <ul :class='$style[`skills-container`]'>
        <li :key=skill v-for='(skill, index) in skills' :class='$style[`skill-wrapper`]'>
            <Skill :skill=skill />
            <div :class='$style.divider' v-if='skills.length - 1 !== index || $slots.additional' />
        </li>
        <slot name='additional' v-if=$slots.additional />
    </ul>
</template>

<style module lang='scss' src='./styles.module.scss' />
