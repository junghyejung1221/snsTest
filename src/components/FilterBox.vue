<template>
  <div :class= "`${filter} filter-item`" :style="`background-image:url(${ImageURL})`"></div> 
</template>

<script>
import { interfaceDeclaration } from '@babel/types';

export default {
  name: 'FilterBox',
   data(){
    return {
           


    }
  }
  ,
  props: {
    ImageURL : String,
    FiterName : Array,
    filter : String,
  }
  
}
</script>

<style>
/* css파일추가 */
@import '../css/FilterBox.css';

</style>
