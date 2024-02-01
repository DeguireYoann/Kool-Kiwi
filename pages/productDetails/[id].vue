<template>
    <div v-if="product" class="w-full max-w-sm bg-white border">
    <div class="flex align-center justify-center border-gray-200 rounded-lg shadow m-2">
      <NuxtImg class="p-8 rounded-t-lg w-52 h-52" :src="img" :alt="product.name" />
    </div>
    <div class="px-5 pb-5 border-gray-200 rounded-lg shadow m-2">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900">{{ product.name }}</h5>
        <ProductAttributes :attributes="attributes" :limite="100" />
      <!-- ... Autres détails du produit ... -->
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900">{{ product.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getProductIndex } from "~/server/algolia/client";
import type { AlgoliaProductRecord } from '~/server/lib/types';

const product = ref<AlgoliaProductRecord>();
const route = useRoute();
try {
  const results = await getProductIndex().search(route.params.id.toString())
  product.value = results.hits[0] as AlgoliaProductRecord;
} catch (error) {
  console.log(error)
}

const img = product?.value?.images[0]?.url || 'assets/images/products/notFound.jpg';
const attributes = product?.value?.attributes || [];
//         <NuxtLink :to="path" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</NuxtLink>
</script>