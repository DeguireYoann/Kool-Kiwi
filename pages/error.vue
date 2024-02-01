<template>
  <div>
      <NuxtLink to="/">Home page</NuxtLink>
      <PageNotFound v-if="error.statusCode === 404" :message="error.message" />
  </div>
</template>

<script setup>
  const error = defineProps(['error'])
</script>