<template>
  <div id="app">
    <my-header></my-header>
    <section>
      <list v-for="(item,index) in list" :key="index" :names="item.name"></list>
     
    </section>
    <my-footer @addclick="add"></my-footer>
  </div>
</template>

<script>
import myHeader from "./components/my-header"
import list from "./components/list"
import myFooter from "./components/my-footer"
import axios from "axios"
export default {
  name: 'App',
  components: {
    myHeader,
    list,
    myFooter
  },
  data(){
    return{
        list:[]
    }
  },
  mounted(){
    axios.get('/list/data').then((res)=>{
      console.log(res)
      this.list=res.data
    })
  },
  methods:{
    add(val){
        this.list.push({
          "name":val
        })
    }
  }
}
</script>

<style rel='stylesheet/scss' lang='scss' >
@import './scss/common.scss';
@import './scss/_minix.scss';
   html,body{
     width:100%;
     height: 100%;
     overflow: hidden;
   }
    #app {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      section{
        flex: 1;
        overflow-y: auto;
      }
    }
</style>
