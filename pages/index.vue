<script setup>
const mainRef = ref(null);

watchEffect(() => {
  provide('main-ref', mainRef);
});

const { addView } = usePageViews();

onMounted(async () => {
  await addView();
});
</script>

<template>
  <Header />
  <main :class='$style[`main-layout`]' ref=mainRef>
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

  @media (max-width: $lg) {
    margin-top: $section-spaces;
    margin-bottom: calc($section-spaces / 2);
  }
}
.darken-overlay {
  position: absolute;
  inset: 0;
  z-index: -2;

  background-color: var(--color-main-bg);
  backdrop-filter: blur(122px);
}
</style>
