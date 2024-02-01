<script lang="ts" setup>
import type { AlgoliaProductRecord } from '~/server/lib/types';
import { getProductIndex } from '~/server/algolia/client'

const products = ref<AlgoliaProductRecord[]>([]);
const route = useRoute();

// Function to fetch products based on query
const fetchProducts = async (query: any) => {
  try {
    const results = await getProductIndex().search(query || '');
    products.value = results.hits as AlgoliaProductRecord[] || [];
  } catch (error) {
    console.error(error);
  }
};

// Watch for changes in route.query and fetch products
watch(
  () => route.query.search,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      fetchProducts(newValue);
    }
  }
);

// Initial product fetching on component mount
onMounted(() => {
  fetchProducts(route.query.search);
});
</script>

<template>
  <div v-if="products.length > 0" class="productList flex flex-wrap">
    <ProductsListCard v-for="product in products" :key="product.objectID" :product="product" />
  </div>
  <div v-else>
    No product found!
  </div>
</template>