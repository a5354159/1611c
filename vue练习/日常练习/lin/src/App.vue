<template>
  <div id="app">
       <my-header></my-header>
    <section class="section">
      <my-list></my-list>
    </section>
      <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './components/myHeader';
import myFooter from './components/myFooter';
import myList from './components/my-list';

export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
    myHeader,
    myFooter,
    myList
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
}
</style>