<template>
  <div class="postContent">
    <div v-if="!editPost">
      <h1>
        {{ post?.title }}
      </h1>
      <p>{{ post?.body }}</p>
      <button v-on:click="editMode" class="Button">Edit</button>
    </div>
    <div v-else>
      <form @submit.prevent="submitForm">
        <div>
          <label for="title" class="editContent">Title:</label><br />
          <input type="text" id="title" v-model="title" required />
        </div>
        <div class="editDireccion">
          <label for="body" class="editContent">Body:</label><br />
          <textarea id="body" rows="7" cols="50" required>{{ body }}</textarea>
        </div>
        <button type="button" v-on:click="cancelEditMode" class="cancelButton">Cancel</button>
        <button type="submit" class="Button">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import { getPost, updatePost } from '@/services/posts'

export default {
  name: 'Post',
  data() {
    return {
      editPost: false,
      post: null,
      title: '',
      body: ''
    }
  },
  methods: {
    editMode() {
      this.editPost = true
    },
    cancelEditMode() {
      this.editPost = false
    },
    submitForm() {
      if (this.post.title == title.value && this.post.body == body.value) {
        this.editPost = false
        return
      }
      this.post.title = title.value
      this.post.body = body.value
      updatePost(this.post)
      this.editPost = false
    }
  },
  async created() {
    const postId = this.$route.params.id

    // Check if the Post is saved in localStorage
    if (localStorage.getItem(`post-updated-${postId}`) !== null) {
      const postJson = localStorage.getItem(`post-updated-${postId}`)
      this.post = JSON.parse(postJson)
    } else {
      // Getting Posts from API
      this.post = await getPost(postId)
    }
    this.title = this.post.title
    this.body = this.post.body
  }
}
</script>

<style>
h1 {
  font-size: 7vh;
  line-height: 8vh;
  color: black;
  text-transform: uppercase;
}

p {
  margin-top: 2vh;
  font-size: 3vh;
}

.editDireccion {
  margin-top: 3vh;
}

.editContent {
  font-size: 30px;
  color: black;
}

#title,
#body {
  border: none;
  border-bottom: 2px solid black;
  font-size: 30px;
  padding-left: 10px;
  min-width: 40vw;
  max-width: 90vw;
  opacity: 0.6;
}

.Button {
  margin-top: 2vh;
  background-color: rgb(128, 9, 9);
  border: none;
  color: aliceblue;
  height: 50px;
  width: 150px;
  border-radius: 10px;
  cursor: pointer;
}

.cancelButton {
  margin-top: 2vh;
  background-color: rgba(128, 9, 9, 0);
  border: 2px solid rgb(128, 9, 9);
  color: rgb(128, 9, 9);
  height: 50px;
  width: 150px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 1vw;
}

@media only screen and (max-width: 768px) {
  h1 {
    font-size: 5vh;
    line-height: 5vh;
    color: black;
    text-transform: uppercase;
  }
}
</style>
