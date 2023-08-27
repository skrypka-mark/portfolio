<script setup>
import { projects } from '~/constants';
</script>

<template>
    <section id='projects'>
        <Container>
            <SvgoEllipse3 class='ellipse3' />
            <SvgoEllipse4 class='ellipse4' />
            <SvgoEllipse5 class='ellipse5' />
            <Typography variant='caption' class='block max-lg:text-center'>My projects</Typography>
            <ul class='flex flex-col gap-y-4 mt-8 max-lg:items-center'>
                <li :key=project.name v-for='project in projects'>
                    <ProjectCard v-bind=project />
                </li>
            </ul>
        </Container>
    </section>
</template>
