<script setup lang="ts">
import type { AlgoliaProductRecord } from '~/server/lib/types';

const props = defineProps({
  product: {
    type: Object as () => AlgoliaProductRecord,
    required: true,
  },
});

const img = props.product.images[0]?.url || '/assets/images/products/notFound.jpg';
const attributes = props.product.attributes;
const path = `/productdetails/${props.product.productId}`;
</script>

<template>
  <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow m-2 flex flex-col">
    <a :href="path" class="flex align-center justify-center">
      <NuxtImg class="p-8 rounded-t-lg w-52 h-52" :src="img" :alt="product.name" />
    </a>
    <div class="px-5 pb-5 flex flex-col h-full">
      <a :href="path">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900">{{ product.name }}</h5>
      </a>
      <p class="text-gray-500 text-sm">By <a href="#" class="text-green-700 hover:underline">ABC Company</a></p>
      <ProductAttributes :attributes="attributes" :limite="1" />
      <!-- ... Autres détails du produit ... -->
      <div class="flex items-center mt-auto pt-3">
        <div class="rounded-lg bg-gray-100 flex py-2 px-3 mx-2">
          <span class="mr-1 mt-1">$</span>
          <span class="font-bold text-2xl">25</span>
        </div>
        <div class="relative ml-2 mr-4 h-full flex">
            <div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
            <input type="number" class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-full w-8 flex items-end pb-1" />
        </div>
        <CartButton :path="path" />
      </div>
    </div>
  </div>
</template>
