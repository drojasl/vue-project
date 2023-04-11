<script setup lang="ts">
import PostList from '../components/PostList.vue'
</script>

<template>
  <div class="titleSection">
    <h1 class="title">Posts</h1>
  </div>
  <main class="posList">
    <PostList />
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap');

body {
  padding: 1rem;
}
.titleSection {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}

.title {
  font-size: 12vh;
  color: black;
  font-family: 'Libre Baskerville', serif;
  margin-top: 3vh;
}

.posList {
  margin-top: 3vh;
}
</style>
