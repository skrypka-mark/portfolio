<script setup>
const route = useRoute();
</script>

<template>
  <main :class='$style[`main-layout`]'>
    <Hero />
    <About />
    <Projects :class='$style[`projects-section`]' />
    <Footer />
    <div :class='$style[`darken-overlay`]' />
  </main>
</template>

<style module lang='scss'>
.main-layout {
  position: relative;
  // margin-top: var(--header-height);
}
.projects-section {
  margin-top: calc($section-spaces * 2);
  margin-bottom: $section-spaces;
}
.darken-overlay {
  position: absolute;
  inset: 0;
  z-index: -2;

  background-color: var(--color-main-bg);
  backdrop-filter: blur(122px);
}
</style>
