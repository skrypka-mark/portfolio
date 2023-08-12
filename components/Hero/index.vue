<script setup>
import Container from '~/components/Container';
</script>

<template>
    <Container>
        <section id='home' :class='$style.hero'>
            <div :class='$style.wrapper'>
                <HeroImage />
                <HeroContent />
            </div>
        </section>
    </Container>
</template>

<style module lang='scss'>
.hero {
    display: flex;
    align-items: center;

    height: 100vh;

    & > .wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 5rem;

        width: 100%;
        height: 387px;
    }
}
</style>