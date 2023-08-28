<script setup lang='ts'>
import type { ImageSpecsType } from '~/types/ImageSpecsType';
import { SkillIconsMapping } from '~/enums/SkillsMapping';

interface IProjectCardProps {
    name: string;
    description: string;
    image: string;
    preview: string;
    skills: (keyof typeof SkillIconsMapping)[];
    github: string;
    figma: string;
}

const props = defineProps<IProjectCardProps>();

const route = useRoute();

const projectImageRef = ref<null | Ref | { $el: HTMLElement }>(null);
const imageRef = ref<null | { $el: HTMLElement }>(null);
const projectImageSpecs = ref<ImageSpecsType | null>(null);

const isProjectImageModalShown = ref(false);
const isProjectImageVisible = ref(false);
const isProjectImageHovered = useElementHover(projectImageRef, { delayEnter: 100 });

const closeProjectImageModal = () => {
    const query = Object.assign({}, route.query);
    delete query.image;
    navigateTo({ hash: route.hash, query, params: { scroll: 0 } });
};
const toggleProjectImageVisibility = (value: boolean) => {
    isProjectImageVisible.value = typeof value === 'boolean' ? value : !isProjectImageVisible.value;
};

const projectImageClick = (name: string) => {
    navigateTo({ hash: route.hash, query: { image: name?.toLowerCase() }, params: { scroll: 0 } });

    if(!projectImageRef.value?.$el && !imageRef.value?.$el) return;

    const { width, height, top, left } = projectImageRef.value.$el.getBoundingClientRect();
    const { borderRadius } = getComputedStyle(projectImageRef.value.$el);
    const { transform } = getComputedStyle(projectImageRef.value.$el.children[0]);

    projectImageSpecs.value = { width, height, top, left, borderRadius, transform };
};

watch(() => route.query, query => {
    isProjectImageModalShown.value = query?.image === props.name.toLowerCase();
});
</script>

<template>
    <article :class='$style[`project-card`]'>
        <ProjectCardImage
            :image=image
            :visible=!isProjectImageVisible
            :hovered=isProjectImageHovered
            @click=projectImageClick(name)
            ref=projectImageRef
        />
        <div class='flex flex-col items-center px-[5.5rem] max-lg:px-6 max-lg:py-6 max-w-prose'>
            <a :href=preview target='_blank' class='mb-4 text-center'>
                <Typography variant='h3'>
                    {{ name }}
                </Typography>
            </a>
            <Typography variant='body' class='mb-8 text-center '>
                {{ description }}
            </Typography>
            <SkillsList :skills=skills class='mb-12' />
            <div class='flex gap-x-12'>
                <div class='flex gap-x-3'>
                    <a :href=github target='_blank'>
                        <Icon name='mdi:github' size='1.5rem' />
                    </a>
                    <a :href=figma target='_blank'>
                        <Icon name='devicon:figma' size='1.5rem' />
                    </a>
                </div>
                <IconButton iconName='fluent:share-20-filled' :href=preview>Preview</IconButton>
            </div>
        </div>
        <ProjectImageModal
            :open=isProjectImageModalShown
            :image=image
            :image-visible=isProjectImageVisible
            :imageSpecs=projectImageSpecs
            @close=closeProjectImageModal
            @toggle-image-visibility=toggleProjectImageVisibility
        />
    </article>
</template>

<style module lang='scss' src='./styles.module.scss' />
