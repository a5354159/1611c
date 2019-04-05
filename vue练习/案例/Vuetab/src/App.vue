<template>
  <div id="app">
    <header>
      <span @click="componentname='listone'">推荐</span>
      <span @click="componentname='listtow'">品牌</span>
    </header>
      <keep-alive include="listone">
      <component :is='componentname'></component>
       </keep-alive>        
  </div>

</template>

<script>
  import listone from './components/listone.vue'
  import listtow from './components/listtow.vue'
export default {
  name: 'app',
  data () {
    return {
      list:[],
      componentname:'listone'
    }
  },
  components:{
    listone,
    listtow
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
