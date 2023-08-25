<script setup>
const preferredDark = usePreferredDark();
</script>

<template>
  <Head>
    <Title>Mark Skrypka | Frontend Developer</Title>
    <Link rel='icon' type='image/x-icon' :href='preferredDark ? `/favicon-light.ico` : `/favicon.ico`' />
  </Head>
  <NuxtPage />
</template>
