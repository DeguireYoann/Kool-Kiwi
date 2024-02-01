<template>
  <div class="flex flex-col">
    <section class="my-6">
      <h1
        class="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Get you <span class="text-green-600">world's #1</span> Kool Kiwi products 
        <span class="text-green-600">NOW.</span></h1>
      <p class="text-lg font-normal text-gray-500 my-2">Here at Kool Kiwi we focus on on whats "Kool".</p>
    </section>
    <BannerDelivery />
    <BannerAbout />
  </div>
</template>

<script setup lang="ts">
// import { contentClient } from '~/server/contentful/client';
// const contenue = contentClient;
// contenue.getEntry('5p2LD7Uku7QYo863YbqdkG')
//   .then((entry: any) => console.log(entry))
//   .catch(console.error)
</script>