<template>
<div class="post">
    <div class="post-header">
      <div class="profile" :style="{backgroundImage : `url(${userdata.userImage})`}"></div>
      <span class="profile-name">{{userdata.name}} {{$store.state.storedata[0].name}}</span>
    </div>
    <div class="post-body" :style="{backgroundImage : `url(${userdata.postImage})`}"  @click="$store.commit('AddLike')"></div>
    <div class="post-content">
      <p>likes {{$store.state.likes}} </p>
      <p><strong></strong>{{userdata.content}}</p>
      <p class="date">{{userdata.date}}</p>
    </div>
</div> 
</template>


<script>
export default{
  props: {
    userdata : Object,
    // storedata : Array,
  }
}
</script>

<style>
/* css파일추가 */
@import '../css/MainPostStyle.css';
</style>