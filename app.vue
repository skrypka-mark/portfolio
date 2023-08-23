<script setup>
import { breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);

console.log('====================================');
console.log(breakpointsTailwind);
console.log('====================================');
</script>

<template>
  <NuxtPage />
</template>
