<template>
  <div>
    <div v-for="(attribute, outerIndex) in attributes" v-if="attributes.length > 0">
      <div v-if="!limite || outerIndex < limite">
        <ul v-if="attribute">
          <!-- TODO FIX THAT TO MAP THROUGHT THE OBJECT KEYS -->
          <li v-for="(value, innerIndex) in attribute">{{ value["en-US"] }}</li>
        </ul>
        <span v-else>No attributes found</span>
      </div>
    </div>
    <span v-else>No attributes found</span>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    attributes: {
      type: Array,
      required: true
    },
    limite: {
      type: Number,
      required: false
    }
  });  
</script>
