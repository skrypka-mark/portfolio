<script setup>
defineProps({ skills: Array });

const skillIconsMapping = {
    vue: 'devicon:vuejs',
    react: 'vscode-icons:file-type-reactjs',
    nuxt: 'skill-icons:nuxtjs-dark',
    next: 'teenyicons:nextjs-outline',
    node: 'devicon:nodejs',
    express: 'skill-icons:expressjs-dark'
};
</script>

<template>
    <ul :class='$style[`skills-container`]'>
        <li :key=skill v-for='(skill, index) in skills' :class='$style.skill'>
            <div :class='$style[`skill-content`]'>
                <Icon :name=skillIconsMapping[skill] size='1.5rem' />
                <Typography variant='body' :class='$style[`skill-name`]'>
                    {{ skill }}
                </Typography>
            </div>
            <div :class='$style.divider' v-if='skills.length - 1 !== index' />
        </li>
    </ul>
</template>

<style module lang='scss'>
.skills-container {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    list-style: none;

    .skill {
        display: flex;
        align-items: center;
        column-gap: 1rem;

        & > .skill-content {
            display: flex;
            align-items: center;
            column-gap: 5px;
            
            & > .skill-name {
                text-transform: capitalize;
            }
        }
    }
    .divider {
        width: 1px;
        height: 20px;

        background: rgba(45, 46, 50, .2);
    }
}
</style>
