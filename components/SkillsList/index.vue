<script setup>
defineProps({ skills: Array });
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

<style module lang='scss'>
.skills-container {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    list-style: none;

    .skill-wrapper {
        display: flex;
        align-items: center;
        column-gap: 1rem;
    }
    .divider {
        width: 1px;
        height: 20px;

        background: rgba(45, 46, 50, .2);
    }
}
</style>
