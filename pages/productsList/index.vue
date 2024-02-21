<script setup lang="ts">
import type { AlgoliaProductRecord } from '~/server/lib/types';

const runtimeConfig = useRuntimeConfig();
const algoliaIndexName = runtimeConfig.ALGOLIA_INDEX;
const route = useRoute();
const routeQuery = computed(() => route.query);

const fetchProductsData = async () => {
  if (!algoliaIndexName) {
    throw new Error("Missing Algolia Index");
  }
  try {
    const { data, error } = await useAsyncAlgoliaSearch({
      indexName: runtimeConfig.ALGOLIA_INDEX,
      query: routeQuery.value.search?.toString() ?? "",
    });
    return data?.value?.hits as AlgoliaProductRecord[] || [];

  } catch (error) {
    console.error(error);
    return [];
  }
};

const { data: products, pending: loading, error } = useAsyncData("getProduct", fetchProductsData, {
  watch: [routeQuery],
});

</script>

<template>
  <div>
    <div v-if="loading" type="button" class="bg-indigo-500" disabled>
      Processing...
    </div>
    <div v-if="!loading">
      <div v-if="products && products.length > 0" class="productList flex flex-wrap">
        <ProductsListCard v-for="product in products" :key="product.objectID" :product="product" />
      </div>
      <div v-else>
        No product found!
      </div>
  </div>
</div>
</template>
