<script setup>
const route = useRoute();
</script>

<template>
  <main :class='$style[`main-layout`]'>
    <Hero />
    <About />
    <Projects :class='$style[`projects-section`]' />
    <Footer />
  </main>
</template>

<style module lang='scss'>
.main-layout {
  // margin-top: var(--header-height);
}
.projects-section {
  margin-top: calc($section-spaces * 2);
  margin-bottom: $section-spaces;
}
</style>
