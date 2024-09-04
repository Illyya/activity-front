<script setup lang="ts">
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Home' }
  ],
})
</script>

<template>
  <h1>Home</h1>

  <nav>
    <ul>
      <li>
        <nuxt-link to="/users">users</nuxt-link>
      </li>
    </ul>
  </nav>
</template>