<template>
    <section id='about' class='relative'>
        <SvgoEllipse2 :class='$style.ellipse' />
        <div :class='$style[`about-wrapper`]'>
            <Container :class='$style.container'>
                <div class='flex flex-col max-lg:items-center'>
                    <Typography variant='caption'>About me</Typography>
                    <article :class='$style[`about-content`]'>
                        <Typography
                            variant='h2'
                            class='whitespace-break-spaces'
                            :class='$style[`about-content__title`]'
                        >Frontend Developer based in
                            <div class='relative inline-block whitespace-break-spaces'>Ukraine
                                <Icon
                                    name='emojione-v1:flag-for-ukraine'
                                    class='absolute top-0 left-full ml-1.5'
                                    :class='$style[`icon-ukraine`]'
                                />
                            </div>
                        </Typography>
                        <Typography variant='body' class='whitespace-break-spaces'>As a Frontend Developer, I possess an impressive arsenal of skills in JavaScript, React, React Native, Vue, Tailwind CSS, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</Typography>
                    </article>
                </div>
                <img :class='$style[`about-img`]' src='/img/about.png' loading='lazy' />
            </Container>
        </div>
    </section>
</template>

<style module lang='scss'>
.ellipse {
    position: absolute;
    top: -203px;
    right: -450px;

    width: 948.439px;
    height: 548.983px;
    z-index: -3;

    filter: blur(242px);
}
.about-wrapper {
    padding-block: 2rem;
    background: var(--color-section-bg);

    & > .container {
        display: flex;
        justify-content: space-between;
        column-gap: 8rem;

        @media (max-width: $lg) {
            flex-direction: column;
            align-items: center;
            row-gap: 1.5rem;
        }

        .about-content {
            display: flex;
            flex-direction: column;
            row-gap: 1rem;

            max-width: 35rem;
            margin-top: $section-spaces;

            @media (max-width: $lg) {
                margin-top: 2rem;
                text-align: center;
            }

            .about-content__title {
                max-width: 90%;
            }
            .icon-ukraine {
                font-size: 2rem;

                @media (max-width: $lg) {
                    font-size: 1.5rem;
                }
            }
        }
        & > .about-img {
            max-width: 100%;
            height: 100%;
            aspect-ratio: 1;
            border-radius: $border-radius-sm;
        }
    }
}
</style>
