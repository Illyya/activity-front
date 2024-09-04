<script setup lang="ts">
const runtimeConfig  = useRuntimeConfig()
const apiUrl: string = runtimeConfig.public.apiUrl

const data = await useFetch(`${apiUrl}get-test`)
</script>

<template>
  <NuxtPage />
</template>
