<script setup>
import { HEADER_HEIGHT, SECTION_SPACES, PROJECTS_SPACES } from '~/app/router.options';

const NuxtLink = defineNuxtLink({ componentName: 'nuxt-link' });

const links = [
    { value: '', label: 'home' },
    { value: '#about', label: 'about' },
    { value: '#projects', label: 'projects' },
    { value: '#contact', label: 'contact' }
];

const mainRef = inject('main-ref');

const { y } = useWindowScroll();
const { height } = useWindowSize();
const activeLink = ref(null);

watch(y, value => {
    if(mainRef.value) {
        const { height: mainHeight } = mainRef.value?.getBoundingClientRect();

        if(y.value + height.value >= mainHeight) {
            return activeLink.value = links.at(-1).value;
        }
    }
    if(!y.value) {
        return activeLink.value = links[0].value;
    }
    for(const link of links) {
        const section = document.getElementById(link.label);

        if(value >= section.offsetTop - (
            link.value === '#projects'
                ? HEADER_HEIGHT + PROJECTS_SPACES
                : HEADER_HEIGHT + SECTION_SPACES
            ) && value < section.offsetTop + section.scrollHeight
        ) {
            activeLink.value = link.value;
        }
    }
}, { immediate: true });
</script>

<template>
    <Teleport to='body'>
        <div :class='$style.header'>
            <Container is='nav' :class='$style.nav'>
                <NuxtLink :class='$style.logo' :to='{ params: { scroll: true } }'>
                    <SvgoLogo />
                </NuxtLink>
                <ul :class='$style[`nav-links`]'>
                    <li :key=link v-for='link in links'>
                        <Typography
                            variant='link'
                            :is=NuxtLink
                            :class='[$style.link, { "link-active": link.value === activeLink }]'
                            :to='{ hash: link.value, params: { scroll: true } }'
                        >
                            {{ link.label }}
                        </Typography>
                    </li>
                </ul>
                <button>
                    <Icon name='gg:menu-right-alt' size='2rem' />
                </button>
            </Container>
        </div>
    </Teleport>
</template>

<style module lang='scss'>
.header {
    position: fixed;
    top: 0;

    width: 100%;
    height: var(--header-height);

    background: rgba(231, 231, 231, .75);
    backdrop-filter: blur(20px);

    & > .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 100%;

        .logo {
            & > svg {
                height: 1rem;
            }
        }
        .nav-links {
            display: flex;
            align-items: center;
            column-gap: 20px;

            height: 100%;

            list-style: none;

            .link {
                text-transform: capitalize;
            }

            @media (max-width: $xl) {
                display: none;
            }
        }
    }
}
</style>