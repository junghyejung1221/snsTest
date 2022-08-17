<template>
<div class="post">
    <div class="post-header">
      <div class="profile" :style="{backgroundImage : `url(${userdata.userImage})`}"></div>
      <span class="profile-name">{{userdata.name}}</span>
    </div>
    <div class="post-body" :style="{backgroundImage : `url(${userdata.postImage})`}"></div>
    <div class="post-content">
      <p>{{userdata.likes}}</p>
      <p><strong>{{userdata.name}}</strong>{{userdata.content}}</p>
      <p class="date">{{userdata.date}}</p>
    </div>
</div> 
</template>


<script>
export default{
  props: {
    userdata : Object,
  }
}
</script>

<style>
/* css파일추가 */
@import '../css/MainPostStyle.css';
</style>