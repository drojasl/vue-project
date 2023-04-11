<template>
  <header>
    <nav>
      <RouterLink to="/" class="routerLink">Back to Home</RouterLink>
    </nav>
  </header>
  <main>
    <Post />
  </main>
</template>

<script setup lang="ts">
import Post from '../components/Post.vue'
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

nav {
  border: 1px solid black;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 2vh;
}
</style>
