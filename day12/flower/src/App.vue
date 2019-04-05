<template>
  <div id="app">
    
   <HelloWorld v-for="(item,index) in arr" :key="index" :items='item'></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return  {
      arr:[]
    }
  },
  created(){
      this.$http.get('/api/flower').then((res)=>{
        console.log(res.data)
        this.arr = res.data
      }
      ).catch((err)=>{

      }
      )
  }  
}
</script>

<style lang="scss">
@import './sass/_minix.scss';
@import './sass/common.scss';
html,body,#app{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @include box_flex;
  @include direction(column);
  // background-color:#f0f; 
}
</style>
