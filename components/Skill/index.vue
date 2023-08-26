<script setup>
defineProps({ skill: String });

const skillIconsMapping = {
    vue: 'devicon:vuejs',
    react: 'vscode-icons:file-type-reactts',
    'react native': 'vscode-icons:file-type-reactjs',
    nuxt: 'skill-icons:nuxtjs-dark',
    next: 'teenyicons:nextjs-outline',
    node: 'devicon:nodejs',
    express: 'skill-icons:expressjs-dark',
    figma: 'devicon:figma',
    scss: 'devicon:sass'
};
</script>

<template>
    <div :class='$style.skill'>
        <Icon :name=skillIconsMapping[skill] size='1.5rem' />
        <Typography variant='h4' :class='$style[`skill-name`]'>
            {{ skill }}
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
