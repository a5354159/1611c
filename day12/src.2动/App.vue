<template>
  <div id="app">
    <button @click="open = !open">显示</button>
    <transition>
      <box v-show="open"></box>
    </transition>
    <transition name="a">
      <box v-show="open"></box> 
    </transition>

    <transition name="b"
    :duration="3000"
    enter-active-class="animated tada"
    leave-active-class="animated swing"
    >
      <box v-show="open"></box> 
    </transition>

    <input type="text" v-focus>
  </div>
</template>

<script>
import Box from './components/box';
import axios from 'axios';
import './css/animate.css';
export default {
  name: 'App',
  components: {
    Box
  },
  data(){
    return {
      open:false
    }
  },
  mounted() { 
   
  },
  methods: {
    
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">

  .v-enter,.v-leave-to{
    opacity: 0;
    transform: scale(0)
  }
  .v-enter-active,.v-leave-active{
    transition: all 1s;
  }
  .v-enter-to,.v-leave{
    opacity: 1;
    transform: scale(1);
  }


  .a-enter,.a-leave-to{
    opacity: 0;
    transform: translateX(-100%);
  }
  .a-enter-active,.a-leave-active{
    transition: all 1s;
  }
  .a-enter-to,.a-leave{
    opacity: 1;
    transform: translateX(0);
  }

  .b-enter,.b-leave-to{
    opacity: 0;
    transform: rotate(360deg);
  }
  .b-enter-active,.b-leave-active{
    transition: all 1s;
  }
  .b-enter-to,.b-leave{
    opacity: 1;
    transform: rotate(0);
  }
</style>
