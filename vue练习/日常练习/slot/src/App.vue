<template>
  <div id="app">
    <new-header>
      <template v-slot:span>
        <span>周三</span>
      </template>
    </new-header>
    <new-header>
      <template v-slot:default=obj>
        <span v-for="(item,index) in obj.list" :key=index >{{item.title}}</span>
      </template>
    </new-header>
  </div>
</template>

<script>
import newHeader from './components/newHeader'
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
    newHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
}

</style>
