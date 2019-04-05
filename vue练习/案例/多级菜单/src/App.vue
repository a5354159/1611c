<template>
  <div id="app">
    <my-list :list='list'></my-list>
  </div>
</template>

<script>
import Axios from 'axios'
import myList from './components/myList'
export default {
  name: 'app',
  data () {
    return {
        list:[]
    }
  },
  components:{
    myList
  },
  mounted(){
    Axios.get('/api/list').then((res)=>{
      console.log(res);
      this.list=res.data;
    })
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
