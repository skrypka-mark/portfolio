<template>
    <section id='about' :class='$style.about'>
        <Container :class='$style.container'>
            <div>
                <Typography variant='caption'>About me</Typography>
                <article :class='$style[`about-content`]'>
                    <div class='relative inline-block self-start'>
                        <Typography variant='h2'>Frontend Developer based in Ukraine</Typography>
                        <Icon name='emojione-v1:flag-for-ukraine' size='30' class='absolute top-0 left-full ml-1.5' />
                    </div>
                    <Typography variant='body'>
                        As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                    </Typography>
                </article>
            </div>
            <img :class='$style[`about-img`]' src='/img/about.png' />
        </Container>
    </section>
</template>

<style module lang='scss'>
.about {
    padding-block: 2rem;
    background: rgba(249, 249, 249, .2);

    & > .container {
        display: flex;
        justify-content: space-between;
        column-gap: 8rem;

        .about-content {
            display: flex;
            flex-direction: column;
            row-gap: 1rem;

            margin-top: $section-spaces;
        }
        & > .about-img {
            height: 100%;
            aspect-ratio: 1;
            border-radius: $border-radius;
        }
    }
}
</style>
