<!-- 넓은 Container배경 -->
<!-- 안에 post생성 -->
<template>
  <div class="container">
<div>  
  <!-- 반복문 userdata의 개수만큼 반복 -->
  <div v-if="step == 0">
  <Post :userdata="userdata[i]" v-for="(a,i) in userdata" :key="i"/> {a}
  <button @click="more" >더보기</button>

  </div>

  <!-- 필터선택페이지 -->
  <div v-if="step == 1">
    <div class="upload-image" :style="{backgroundImage : `url(${ImageURL})`}"></div>
    <div class="filters ">
        <FilterBox :ImageURL="ImageURL" v-for="filter in FiterName" :key="filter"   :FiterName="FiterName" :filter="filter"></FilterBox>
    
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="step == 2">
    <div class="upload-image" :style="{backgroundImage : `url(${ImageURL})`}"></div>
    <div class="write">
      <textarea  @input="$emit('write', $event.target.value)"  class="write-box">write!</textarea>
    </div>
  </div>


</div>

</div> 

</template>


<script>

import Post from './MainPost';
import FilterBox from '../components/FilterBox';

import axios from 'axios' ;

export default{
  data(){
    return {
      //더보기 카운트
      count : 0,
      FiterName: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                  "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                  "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],


    }
  },
  components: {
    Post,
    FilterBox
  },
  props: {
    userdata : Array,
    step : Number,  //step1이면 페이지 step2이면 페이지 step3이면 페이지
    ImageURL : String
  }
  ,methods : {
    more(){
      // axios.get('URL!!!')
    axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`)
    .then((result)=>{
      this.userdata.push(result.data);
      this.count++;
      console.log(this.count);
      console.log(this.ImageURL);
    })
    }
  }
  

}
</script>

<style>
/* css파일추가 */
@import '../css/MainContainer'
</style>