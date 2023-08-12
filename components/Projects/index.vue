<script setup>
const projects = [
    { name: 'MakerPlace' },
    { name: 'Sportage' },
    { name: 'District' }
];
</script>

<template>
    <section id='projects' :class='$style.projects'>
        <Container>
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
.projects {}
</style>
