<template>
  <div class="card">
    <ul>
      <li v-for="post in posts" :key="post.id" class="postTitle">
        <router-link :to="{ name: 'post', params: { id: post.id } }">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPosts } from '@/services/posts'

export default {
  name: 'PostList',
  data() {
    return {
      posts: []
    }
  },
  async created() {
    // Get the Post from API
    this.posts = await getPosts()

    // Check the LocalStorage
    const updatedPostsKeys = Object.keys(localStorage).filter((key) =>
      key.startsWith('post-updated-')
    )

    // Replace the Posts with title edited
    updatedPostsKeys.forEach((editedPostKey) => {
      const editedPost = JSON.parse(localStorage.getItem(editedPostKey))
      const index = this.posts.findIndex(
        (post) => post.id === editedPost.id && post.title !== editedPost.title
      )
      if (index !== -1) {
        this.posts.splice(index, 1, editedPost)
      }
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0%;
}

li {
  height: 20vh;
  width: 40%;
  margin-right: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(101, 101, 101);
  font-family: 'Inter';
  font-weight: 600;
  font-size: 1.2vw;
  text-align: center;
  padding: 1vw;
  text-transform: uppercase;
  border-radius: 20px;
  overflow: hidden;
}

a {
  color: black;
}

a:hover {
  background-color: hsla(160, 100%, 37%, 0);
}

li:hover {
  background-color: rgb(242, 241, 241);
  cursor: pointer;
  border: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.022);
}

@media only screen and (max-width: 768px) {
  li {
    height: 20vh;
    width: 90%;
    margin-right: 0px;
    margin-bottom: 20px;
    font-size: 1.8vh;
    padding: 3vw;
  }

  li:hover {
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
    border: 2px solid rgb(101, 101, 101);
    box-shadow: 0px 0px 0px rgb(153, 153, 153);
  }
}
</style>
