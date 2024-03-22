
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  path: {
    type: String,
    required: false,
  },
});

const actionPath = props.path ?? "#"

</script>

<template>
    <NuxtLink :to="actionPath" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center w-full h-full justify-center">Add to cart</NuxtLink>
</template>