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
const imageRef = ref(null);
const projectImageSpecs = ref(null);

const isProjectImageModalShown = ref(false);
const isProjectImageVisible = ref(false);
const isProjectImageHovered = useElementHover(projectImageRef, { delayEnter: 100 });
const timeout = ref(null);
// const isProjectImageHovered = useElementHover(projectImageRef, { delayEnter: 1000 });

const closeProjectImageModal = () => {
    isProjectImageModalShown.value = false;
};
const toggleProjectImageVisibility = value => {
    isProjectImageVisible.value = typeof value === 'boolean' ? value : !isProjectImageVisible.value;
};

// watch(isProjectImageHovered, val => {
//     if(!projectImageRef.value && !val) return;

//     isProjectImageModalShown.value = true;

//     const { width, height, top, left } = projectImageRef.value.getBoundingClientRect();
//     const { borderRadius } = getComputedStyle(projectImageRef.value);

//     projectImageSpecs.value = { width, height, top, left, borderRadius };
// });

// const projectImageMouseOver = () => {
//     clearTimeout(timeout.value);
//     if(!projectImageRef.value.$el && !imageRef.value.$el) return;

//     timeout.value = setTimeout(() => {
//         const { width, height, top, left } = projectImageRef.value.$el.getBoundingClientRect();
//         const { borderRadius } = getComputedStyle(projectImageRef.value.$el);
//         const { transform } = getComputedStyle(projectImageRef.value.$el.children[0]);

//         projectImageSpecs.value = { width, height, top, left, borderRadius, transform };
//         isProjectImageModalShown.value = true;
//     }, 1500);
// };
// const projectImageMouseOut = () => {
//     clearTimeout(timeout.value);
// };
const projectImageClick = () => {
    clearTimeout(timeout.value);
    if(!projectImageRef.value.$el && !imageRef.value.$el) return;

    const { width, height, top, left } = projectImageRef.value.$el.getBoundingClientRect();
    const { borderRadius } = getComputedStyle(projectImageRef.value.$el);
    const { transform } = getComputedStyle(projectImageRef.value.$el.children[0]);

    projectImageSpecs.value = { width, height, top, left, borderRadius, transform };
    isProjectImageModalShown.value = true;
};
</script>

<template>
    <article :class='$style[`project-card`]'>
        <!-- <div :class='$style[`project-card__image-container`]' ref=projectImageRef>
            <img
                :src=image
                :class='$style[`project-card__image`]'
                @mouseover=projectImageMouseOver
                @mouseout=projectImageMouseOut
                v-if=!isProjectImageVisible
            />
        </div> -->
        <ProjectCardImage
            :image=image
            :visible=!isProjectImageVisible
            :hovered=isProjectImageHovered
            @click=projectImageClick
            ref=projectImageRef
        />
        <div class='flex flex-col items-center md:px-[5.5rem]'>
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

<style module lang='scss'>
.project-card {
    display: flex;
    align-items: center;

    height: 24rem;

    background: var(--color-card-bg);
    padding: $spaces;
    box-shadow: $box-shadow-main;
    border-radius: $border-radius;

    @media (max-width: $lg) {
        flex-direction: column;
        height: auto;
        padding: calc($spaces / 2);
    }
}
</style>
