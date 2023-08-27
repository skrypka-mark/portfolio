<template>
    <section id='about' class='relative'>
        <SvgoEllipse2 class='ellipse2' />
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

<style module lang='scss' src='./styles.module.scss' />
