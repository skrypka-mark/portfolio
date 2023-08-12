<script setup></script>

<template>
    <div :class='$style[`hero-image`]' />
</template>

<style module lang='scss'>
.hero-image {
    height: 100%;
    aspect-ratio: 1;

    border: 2px solid rgba(0, 0, 0, .5);

    background-image: url('img/hero.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    animation: morph 10s ease-in-out infinite;
}

@keyframes morph {
    0% { border-radius: 100% 60% 100% 60% / 60% 100% 60% 100%; }
    30% { border-radius: 60% 60% 70% 40% / 50% 60% 30% 60%; }
    65% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    100% { border-radius: 100% 60% 100% 60% / 60% 100% 60% 100%; }
}
</style>