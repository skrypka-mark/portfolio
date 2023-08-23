<script setup>
const mainRef = ref(null);

watchEffect(() => {
  provide('main-ref', mainRef);
});
</script>

<template>
  <main :class='$style[`main-layout`]' ref=mainRef>
    <Header />
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
