<template>
    <p>
        Sorry, this page doesn't seems to exist {{ message }}
    </p>
</template>

<script lang="ts" setup>
    defineProps({
        message: String
    })
</script>