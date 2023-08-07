<script setup>
const route = useRoute();
</script>

<template>
  <main :class='$style[`main-layout`]'>
    <Hero />
  </main>
</template>

<style module lang='scss'>
.main-layout {
  // margin-top: var(--header-height);
}
</style>
