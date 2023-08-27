<script setup lang='ts'>
import { SkillIconsMapping, SkillNamesMapping } from '~/enums/SkillsMapping';

interface ISkillProps {
    skill: keyof typeof SkillIconsMapping;
}

defineProps<ISkillProps>();
</script>

<template>
    <div :class='$style.skill'>
        <Icon :name=SkillIconsMapping[skill] size='1.5rem' />
        <Typography variant='h4' :class='$style[`skill-name`]'>
            {{ SkillNamesMapping?.[skill as keyof typeof SkillNamesMapping] ?? skill }}
        </Typography>
    </div>
</template>

<style module lang='scss'>
.skill {
    display: flex;
    align-items: center;
    column-gap: 5px;

    & > .skill-name {
        text-transform: capitalize;
    }
}
</style>
