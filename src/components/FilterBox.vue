<template>
  <div class="filter-item" :style="`background-image:url(${ImageURL})`"></div> 
</template>

<script>
export default {
  name: 'FilterBox',
   data(){
    return {
      


    }
  }
  ,
  props: {
    ImageURL : String
  }
  
}
</script>

<style>
/* css파일추가 */
@import '../css/FilterBox.css';

</style>
