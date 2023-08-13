<script setup>
defineProps({
    name: String,
    description: String,
    image: String,
    preview: String,
    skills: Array,
    github: String,
    figma: String
});

const projectImageRef = ref(null);
const projectImageSpecs = ref(null);
const isProjectImageModalShown = ref(false);
const isProjectImageVisible = ref(false);
const isProjectImageHovered = useElementHover(projectImageRef, { delayEnter: 1000 });

const closeProjectImageModal = () => {
    isProjectImageModalShown.value = false;
};
const toggleProjectImageVisibility = value => {
    isProjectImageVisible.value = typeof value === 'boolean' ? value : !isProjectImageVisible.value;
};

watch(isProjectImageHovered, val => {
    if(!projectImageRef.value && val) return;

    isProjectImageModalShown.value = true;

    const { width, height, top, left } = projectImageRef.value.getBoundingClientRect();
    const { borderRadius } = getComputedStyle(projectImageRef.value);

    projectImageSpecs.value = { width, height, top, left, borderRadius };
});
</script>

<template>
    <article :class='$style[`project-card`]'>
        <div :class='$style[`project-card__image-container`]'>
            <img :src=image :class='$style[`project-card__image`]' ref=projectImageRef v-if=!isProjectImageVisible />
            <ProjectImageModal
                :open=isProjectImageModalShown
                :image-visible=isProjectImageVisible
                :image=image
                :imageSpecs=projectImageSpecs
                @close=closeProjectImageModal
                @toggle-image-visibility=toggleProjectImageVisibility
            />
        </div>
        <div class='flex flex-col items-center px-[5.5rem]'>
            <a :href=preview target='_blank'>
                <Typography variant='h3' class='mb-4 text-center'>
                    {{ name }}
                </Typography>
            </a>
            <Typography variant='body' class='mb-8 text-center'>
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
    </article>
</template>

<style module lang='scss'>
.project-card {
    display: flex;
    align-items: center;

    height: 24rem;

    background: var(--color-card-bg);
    box-shadow: $box-shadow-main;
    border-radius: $border-radius;
    overflow: hidden;

    & > .project-card__image-container {
        height: 100%;
        aspect-ratio: 1.6 / 1;
        padding: $border-radius-sm;

        & > .project-card__image {
            height: 100%;
            border-radius: $border-radius-sm;
            box-shadow: $box-shadow-secondary;
            cursor: pointer;
        }
    }
}
</style>
