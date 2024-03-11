 <template>
    <section class="flex bg-gray-800">
        <div class="w-4/6">
            <NuxtImg :src="item.image.url" />
        </div>
        <div class="flex flex-col align-center p-20">
            <h2 class="text-2xl font-extrabold tracking-tight text-white ">{{item.headline}}</h2>
            <p v-if="item.bodytext" class="text-lg font-normal text-gray-300">Here at "Kool" thing we focus on
                {{item.bodytext}}
            </p>
            <div class="flex flex-col sm:flex-row my-6">
                <a v-if="item.targetPage" :href="item.targetPage.slug"
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900">
                    {{item.ctaText}}
            </a>
            </div>
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
</script>