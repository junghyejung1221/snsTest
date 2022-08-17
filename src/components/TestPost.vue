<template>
<div class="post">
    <div class="post-header">

      TestPost
      {{$store.state.likebutton}}
      <div class="profile" :style="{backgroundImage : `url(${storeData.userImage})`}"></div>
       <span class="profile-name">{{storeData.name}}</span>
    </div>
    <div  class="post-body" :style="{backgroundImage : `url(${storeData.postImage})` }"   @click="$store.commit('SwitchLike')"></div>
    <!-- @click="$store.commit('AddLike')" -->
    <div class="post-content">
      <p>likes {{storeData.likes}} </p>
      <p><strong></strong>{{storeData.content}}</p>
      <p class="date">{{storeData.date}}</p> 

    </div>
</div> 
</template>


<script>
export default{
  props: {
    storeData : Object,
  }
}
</script>

<style>
/* css파일추가 */
@import '../css/MainPostStyle.css';
</style>