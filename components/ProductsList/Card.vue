<template>
  <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow m-2">
    <NuxtLink :to="path" class="flex align-center justify-center">
      <NuxtImg class="p-8 rounded-t-lg w-52 h-52" :src="img" :alt="product.name" />
    </NuxtLink>
    <div class="px-5 pb-5">
      <NuxtLink :to="path">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900">{{ product.name }}</h5>
        <ProductAttributes :attributes="attributes" :limite="1" />
      </NuxtLink>
      <!-- ... Autres détails du produit ... -->
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900">{{ product.price }}</span>
        <NuxtLink :to="path" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AlgoliaProductRecord } from '~/server/lib/types';

const props = defineProps({
  product: {
    type: Object as () => AlgoliaProductRecord,
    required: true,
  },
});

const img = props.product.images[0]?.url || 'assets/images/products/notFound.jpg';
const attributes = props.product.attributes;
const path = `/productdetails/${props.product.productId}`;
</script>
