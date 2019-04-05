<template>
    <div id="app">
        <header>
          <span @click="componentname= 'fenlei'">分类</span>
          <span @click="componentname= 'pinpai'">品牌</span>
        </header>
        <keep-alive exclude ='fenlei'>
        <component :is="componentname"></component>
        
        </keep-alive>
    </div>
</template>
<script>
import Eventbus from './js/eventbus';
import fenlei from './components/fenlei';
import pinpai from './components/pinpai';
import axios from 'axios';
export default {
  data(){
    return {
       componentname:'fenlei'
    }
  },
  created() {
   
  },
  components:{
    fenlei,
    pinpai
  },
  computed: {
    
  }
}


</script>


