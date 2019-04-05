<template>
  <div id="app">
  <my-header></my-header>
  <my-list></my-list>
  <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from "./components/myHeader"
import myList from "./components/myList"
import myFooter from "./components/myFooter"
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
    myHeader,
    myList,
    myFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column; 
    background: #F3F4F5;
}

</style>
