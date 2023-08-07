<script setup>
const links = ['home', 'about', 'projects', 'contact'];
</script>

<template>
    <div :class='$style.header'>
        <Container is='nav' :class='$style.nav'>
            <NuxtLink :class='$style.logo'>
                <Typography>mark.dev</Typography>
                <Typography>• freelance base</Typography>
            </NuxtLink>
            <ul :class='$style[`nav-links`]'>
                <li :key=link v-for='link in links'>
                    <NuxtLink :class='$style.link' :to='{ hash: `#${link}` }'>
                        <Typography variant='body'>
                            {{ link }}
                        </Typography>
                    </NuxtLink>
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

        .logo {}
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