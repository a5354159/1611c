<template>
  <div id="app">
     
  </div>
</template>

<script>
import chooesItem from './components/chooes-item';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    chooesItem
  },
  data(){
    return {
      list:[]
    }
  },
  mounted() { 
   
  },
  methods: {
    
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import './scss/common.scss';
@import './scss/_mixin.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  @include box_flex;
  @include direction(column);
  overflow: hidden;
  section{
    @include flex;
    overflow-y: auto;
  }
}
</style>
