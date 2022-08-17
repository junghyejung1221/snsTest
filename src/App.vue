<template>
  <div class="header">
    {{userdata[0].name}}
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step ==1" @click="step++">Next</li>
      <li v-if="step ==2" @click="publish">발행</li>

    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div> 

<h4>
  {{$store.state.name}}
</h4>
<button @click="$store.commit('NameChange')"> 버튼 </button>

  <Container @write="writePost = $event" :ImageURL="ImageURL" :userdata= "userdata" :step="step"/>




  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="imageUpload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>

 <!-- tap만들기 -->
  <!-- <div v-if="step == 0">내용0</div>
  <div v-if="step == 1">내용1</div>
  <div v-if="step == 2">내용2</div>
  <button  @click="step=0">버튼0</button>
  <button  @click="step=1">버튼1</button>
  <button  @click="step=2">버튼2</button> -->

</template>

<script>
import HelloWorld from './components/PostComponent'
import Container from './components/MainContainer'
import postdata from './assets/postdata'
import axios from 'axios'   //서버에서 get등 요청하기 위해  axios.get() 이렇게 요청하면 된다. 
import { throwStatement } from '@babel/types'
import FilterBox from './components/FilterBox.vue'
                            //axios.post('URL',{name: 'kim'},then().catch((err)=>{err}))
export default {
  name: 'App',
   data(){
    return {
      // 유저데이터들
      userdata : postdata,
      
      //내용물 피드 갯수
      step : 0,

      //사진url
      ImageURL : " ",

      //작성글받아온거
      writePost: " "
      }
  },
  components: {
    HelloWorld,
    Container,
    FilterBox
},
  methods: {
    imageUpload(e){
      let ImgFile = e.target.files;
      let url = URL.createObjectURL(ImgFile[0]);
      this.ImageURL = url;
      this.step =1;
    },
    publish(e){
      let mypost = {
      name: "Kim Hyun",
      userImage: "https://placeimg.com/100/100/arch",
      postImage: this.ImageURL,
      likes: 36,
      date: "May 15",
      liked: false,
      content: this.writePost,
      filter: "perpetua"
    };
      this.userdata.unshift(mypost);
      console.log(this.userdata);
      this.step =0;
    }
  }
}
</script>

<style>
/* css파일추가 */
@import './css/AppStyle';

</style>
