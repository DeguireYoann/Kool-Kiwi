<template>
    <section class="flex space-x-8 my-12 shadow-md p-6">
        <div>
            <NuxtImg :src="item.image.url"  class="rounded-full" width="500"/>
        </div>
        <div class="w-3/5">
            <p v-if="bodyText"
                class="mb-3 first-letter:text-7xl first-letter:font-bold first-letter:text-green-700 first-letter:me-3 first-letter:float-start">
                {{bodyText}}</p>
                <a v-if="item.targetPage" :href="item.targetPage.slug"
                class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                {{item.ctaText}}
        </a>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object as () => any,
    required: true,
  },
});

let bodyText = "";
props.item.bodyText.json.content.forEach(e => e.content.forEach(f => bodyText += f.value ?? ""));
</script>