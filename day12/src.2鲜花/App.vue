<template>
  <div id="app">
    <choose-item v-for="(item,index) in list" :key="index" :items="item"></choose-item>
  </div>
</template>
<script>
import chooseItem from './components/chooes-item';
import axios from 'axios';
export default {
  data(){
    return{
      list:[]
    }
  },
  mounted() {
    axios.get('api/newlist').then((res)=>{
      console.log(res.data);
      this.list = res.data;
    }).catch((err)=>{
      console.log(err);
    });
  },
  components:{
    chooseItem
  }
}
</script>
