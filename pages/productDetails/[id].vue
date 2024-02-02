<script lang="ts" setup>
// import { fetchProduct } from '~/composable/commercetools/getProduct';
import type { AlgoliaProductRecord } from '~/server/lib/types';

const route = useRoute();
const runtimeConfig = useRuntimeConfig()
const algoliaIndexName = runtimeConfig.ALGOLIA_INDEX;

const fetchProduct = async () => {
  if (!algoliaIndexName) {
    throw new Error("Missing Algolia Index");
  }
  try {
    const { data, error } = await useAsyncAlgoliaSearch({ 
      indexName: algoliaIndexName,
      query: route.params.id.toString() 
    });
    return data?.value?.hits[0] as AlgoliaProductRecord;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// TODO --> Use function to call commercetools instead of Algolia
// const fetchProductData = async () => {
//   try {
//     const product = await fetchProduct(route.params.id.toString());
//     return product as AlgoliaProductRecord;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

const { data: product, pending: loading, error } = useAsyncData("getProduct", fetchProduct);

const img = computed(() => product?.value?.images[0]?.url || '/assets/images/products/notFound.jpg');
const attributes = computed(() => product?.value?.attributes || [])
</script>

<template>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6" v-if="!loading && product">
    <div class="flex flex-col md:flex-row -mx-4">
      <div class="md:flex-1 px-4">
        <div>
          <div class="bg-white border border-gray-200 rounded-lg shadow h-full mb-4 rounded-lg flex items-center justify-center overflow-hidden">
            <NuxtImg :src="img" :alt="product.name" />
          </div>

          <div class="flex -mx-2 mb-4">
          </div>
        </div>
      </div>
      <div class="md:flex-1 px-4">
        <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{{ product.name }}</h2>
        <p class="text-gray-500 text-sm">By <a href="#" class="text-green-700 hover:underline">ABC Company</a></p>

        <div class="flex items-center space-x-4 my-4">
          <div>
            <div class="rounded-lg bg-gray-100 flex py-2 px-3">
              <span class="mr-1 mt-1">$</span>
              <span class="font-bold text-3xl">25</span>
            </div>
          </div>
          <div class="flex-1">
            <p class="text-green-700 text-xl font-semibold">Save 12%</p>
            <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
          </div>
        </div>

        <p class="text-gray-500">{{ product.description }}</p>

        <div class="flex py-4 space-x-4">
          <div class="relative">
            <div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
            <input type="number" class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 w-8 flex items-end pb-1" />
          </div>
          <div class="w-1/2">
            <CartButton />
          </div>
        </div>
        <ProductAttributes :attributes="attributes" :limite="100" />
      </div>
    </div>
  </div>
</template>