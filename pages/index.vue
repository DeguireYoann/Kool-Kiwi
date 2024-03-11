<template>
  <div class="flex flex-col">
    <section class="my-6">
      <div v-if="topSectionCollection?.items?.length > 0">
        <div v-for="item in topSectionCollection.items">
          <BannerHero v-if="item.__typename == 'ComponentHeroBanner'" :item="item" />
          <BannerDuplex v-if="item.__typename == 'ComponentDuplex'" :item="item" />
        </div>
      </div>
      <div v-if="!topSectionCollection?.items?.length">
        <h1
          class="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Get you <span class="text-green-600">world's #1</span> Kool Kiwi products 
          <span class="text-green-600">NOW.</span></h1>
        <p class="text-lg font-normal text-gray-500 my-2">Here at Kool Kiwi we focus on on whats "Kool".</p>
        <BannerDelivery />
        <BannerAbout />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { GetHomePageDocument } from '~/dist';

const {data} = await useAsyncQuery({
  query: GetHomePageDocument,
  variables: {
    locale: "en-US",
    uid: "3t7Iub6Arm23Cn7wWkIJTd"
  }
})

const topSectionCollection = computed(() => data?.value?.page?.topSectionCollection);
</script>