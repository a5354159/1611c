<template>
  <div id="app">
    <my-header></my-header>
    <section>
      <my-list></my-list>
    </section>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './components/NEWheader'
import myFooter from './components/newFooter'
import myList from './components/newList'
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
    myHeader,
    myFooter,
     myList,
  }
}
</script>

<style lang="scss">
@import './scss/_minix.scss';
@import './scss/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    @include box_flex;
    @include direction('column');
    width: 100%;
    height: 100%;
    background-color: #F8F8F8;
}
</style>
