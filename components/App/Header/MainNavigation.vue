<script setup lang="ts">
import { GetMainNavigationItemsDocument, type MenuGroup } from "~/dist/index"

const { data } = await useAsyncQuery({
  query: GetMainNavigationItemsDocument,
  variables: {
    locale: "en-US",
    uid: "BtIJpF1q3Td9pT0lkzipx",
  },
})

const pagesLinks = ref(data?.value?.navigationMenu.menuItemsCollection.items.map((e: MenuGroup) => {
    return {
        name: e.groupLink?.pageName ?? e.groupName,
        url: e.groupLink?.slug ?? e.groupName?.toLowerCase()
    }
}));

const computedPagesLinks = computed(() => pagesLinks.value);

</script>

<template>
    <div class="flex space-x-8">
        <div v-for="link in computedPagesLinks" :key="link.url">    
            <a :href="link.url" class="flex text-gray-600 hover:text-green-500
                    cursor-pointer transition-colors duration-300">
                {{link.name}}
            </a>
        </div>
    </div>
</template>