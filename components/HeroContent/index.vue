<template>
    <div :class='$style[`hero-content`]'>
        <div :class='$style.heading'>
            <Typography variant='h1' :class='$style.title'>Frontend Developer</Typography>
            <Typography variant='body'>
                Hi, I'm Mark Skrypka. A passionate Frontend Developer based in Ukraine
            </Typography>
        </div>
        <div :class='$style[`socials-group`]'>
            <a href='#' target='_blank'>
                <Icon name='mdi:linkedin' size='1.8rem' />
            </a>
            <a href='#' target='_blank'>
                <Icon name='mdi:github' size='1.8rem' />
            </a>
        </div>
        <Skills :skills='[`vue`, `react`, `nuxt`, `next`, `node`, `express`]' :class='$style.skills' />
    </div>
</template>

<style module lang='scss'>
.hero-content {
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    height: 80%;

    & > .heading {
        display: flex;
        flex-direction: column;
        row-gap: 15px;

        .title {
            text-transform: uppercase;
        }
    }
    & > .socials-group {
        display: flex;
        column-gap: 10px;

        a {
            cursor: pointer;

            transition: color .2s ease-in-out;
            color: var(--color-text);

            &:hover {
                color: var(--color-accent);
            }
        }
    }
    & > .skills {
        margin-top: auto;
    }
}
</style>
