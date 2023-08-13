<script setup>
import Container from '~/components/Container';
</script>

<template>
    <Container>
        <SvgoEllipse1 :class='$style.ellipse' />
        <section id='home' :class='$style.hero'>
            <div :class='$style.wrapper'>
                <HeroImage />
                <HeroContent />
            </div>
        </section>
    </Container>
</template>

<style module lang='scss'>
.ellipse {
    position: absolute;
    top: 15px;
    left: -215px;

    width: 689.42px;
    height: 498.858px;
    z-index: -3;

    filter: blur(242px);
}
.hero {
    display: flex;
    align-items: center;

    height: 100vh;

    & > .wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        column-gap: 5rem;

        width: 100%;
        height: 387px;
    }
}
</style>