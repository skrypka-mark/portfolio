<script setup>
const projects = [
    {
        name: 'MakerPlace',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        image: '/img/projects/maker-place.png',
        preview: '#',
        skills: ['nuxt', 'express', 'scss'],
        github: '#',
        figma: '#'
    },
    {
        name: 'Sportage',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        image: '/img/projects/sportage.png',
        preview: '#',
        skills: ['nuxt', 'express', 'scss'],
        github: '#',
        figma: '#'
    },
    {
        name: 'District',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        image: '/img/projects/district.png',
        preview: '#',
        skills: ['nuxt', 'express', 'scss'],
        github: '#',
        figma: '#'
    },
    {
        name: 'Creativecoder',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        image: '/img/projects/creativecoder.png',
        preview: '#',
        skills: ['nuxt', 'express', 'scss'],
        github: '#',
        figma: '#'
    }
];
</script>

<template>
    <section id='projects' :class='$style.projects'>
        <Container>
            <SvgoEllipse3 :class='$style.ellipse1' />
            <SvgoEllipse4 :class='$style.ellipse2' />
            <SvgoEllipse5 :class='$style.ellipse3' />
            <Typography variant='caption'>My projects</Typography>
            <ul class='flex flex-col gap-y-4 mt-8'>
                <li :key=project.name v-for='project in projects'>
                    <ProjectCard v-bind=project />
                </li>
            </ul>
        </Container>
    </section>
</template>

<style module lang='scss'>
.ellipse1 {
    position: absolute;
    top: -233px;
    left: -280px;

    width: 689.42px;
    height: 498.858px;
    z-index: -1;

    filter: blur(227px);
}
.ellipse2 {
    position: absolute;
    top: 476px;
    right: -241px;

    width: 689.42px;
    height: 498.858px;
    z-index: -1;

    filter: blur(227px);
}
.ellipse3 {
    position: absolute;
    bottom: -87px;
    left: -455px;

    width: 948.439px;
    height: 548.983px;
    z-index: -1;

    filter: blur(227px);
}
.projects {}
</style>
