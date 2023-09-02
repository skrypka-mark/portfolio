<script setup lang='ts'>
import { HERO_FULLNAME } from '~/constants';

const preferredDark = usePreferredDark();
const route = useRoute();

const profile = computed(() => route.query?.profile);

provide('profile-query', profile);

const profileName = computed(() => {
  switch(profile.value) {
    case 'backend':
      return 'Backend Developer';
      break;
    case 'design':
      return 'UI/UX Designer';
      break;
    default:
      return 'Frontend Developer';
  }
});
const meta = computed(() => ({
  title: `${HERO_FULLNAME} | ${profileName.value}`,
  description: ''
}));
</script>

<template>
  <Head>
    <Title>{{ meta.title }}</Title>
    <Link rel='icon' type='image/x-icon' :href='preferredDark ? `/favicon-light.ico` : `/favicon.ico`' />
  </Head>
  <NuxtPage />
</template>
