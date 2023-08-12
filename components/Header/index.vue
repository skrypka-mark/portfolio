<script setup>
const NuxtLink = defineNuxtLink({ componentName: 'nuxt-link' });

const links = [
    { value: '', label: 'home' },
    { value: '#about', label: 'about' },
    { value: '#projects', label: 'projects' },
    { value: '#contact', label: 'contact' }
];
</script>

<template>
    <div :class='$style.header'>
        <Container is='nav' :class='$style.nav'>
            <NuxtLink :class='$style.logo' :to='{ path: `/` }'>
                <SvgoLogo />
            </NuxtLink>
            <ul :class='$style[`nav-links`]'>
                <li :key=link v-for='link in links'>
                    <Typography
                        variant='link'
                        :is=NuxtLink
                        :class='[$style.link, { "link-active": $route.hash === link.value }]'
                        :to='{ path: `/`, hash: link.value }'
                    >
                        {{ link.label }}
                    </Typography>
                </li>
            </ul>
        </Container>
    </div>
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
            // width: 100px;
            // height: 100px;
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
        }
    }
}
</style>