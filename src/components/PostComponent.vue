<template>
<div class="container">
  <h1>{{posts.text}}Latest Posts</h1>
  <hr>
  <p class="error" v-if="error">{{error}}</p>
  <div class="posts-container">
    <div class="post" v-for="(post,index) in posts" 
    v-bind:item="post"
    v-bind:index="index"
    v-bind:key="post._id">


      {{`${post.createAt.getDate()}/${post.createAt.getMonth()}/${post.createAt.getFullYear()}`}}
      <p class="text">{{post.text}}</p>
    </div>
  </div>
</div>
</template>

<script>
import PostService from '../PostService.js';
export default {
  name: 'PostComponent',
  data(){
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async create(){
    try{
      this.posts = await PostService.getPosts();
    }catch(err){
      this.err =err.message;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
