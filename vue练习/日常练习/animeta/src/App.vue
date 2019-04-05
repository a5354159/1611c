<template>
  <div id="app">
      <header>
          <button @click="flag=!flag">点击</button>
      </header>
      <transition>
        <Box v-show="flag"></Box>
      </transition>
      <transition name="a"
      enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
      >
        <Box v-show="flag"></Box>
      </transition>
      <transition name="b" 
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOutUp"
      
      >
        <Box v-show="flag"></Box>
      </transition>
  </div>
</template>

<script>
import '../animatedShow.css/animate.min.css'
import Box from './components/animeta'
export default {
  name: 'app',
  data () {
    return {
      flag:false
    }
  },
  components:{
    Box
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
  .v-enter,.v-leave-to{
    opacity: 0;
    transform: translate(100px,0)
  }
  .v-enter-active,.v-leave-active{
    transition: all 3s ;
  }
  .v-enter-to,.v-leave{
    opacity: 1;
     transform: translate(0,0)
  }

</style>
