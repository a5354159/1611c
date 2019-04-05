<template>
  <div id="app">
      <!-- <my-list :list="list"></my-list> -->
      <header>
         <span @click="componentname='Classify'">分类</span>
         <span @click="componentname='Brand'">品牌</span>
      </header>
      <keep-alive exclude='Classify'>
        <component :is="componentname"></component>
      </keep-alive>
  </div>
</template>

<script>
// import myList from './components/my-list';
import Classify from './components/classify';
import Brand from './components/brand';
import axios from 'axios';
export default {
    data (){
      return{
        list:[],
        componentname:'Classify'
      }
    },
    mounted() {
      axios.get('/api/recursion').then((res)=>{
        console.log(res.data);
        this.list = res.data;
      });
    },
    components:{
      Classify,
      Brand
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">

  
</style>
