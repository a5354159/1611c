<template>
  <div id="app">
      <button @click="flag = !flag">点击</button>
      <transition 
        enter-active-class="animated swing"
        leave-active-class="animated bounceOutRight"
      >
        <Box v-show="flag"></Box>
      </transition>

      <transition name="a"
        enter-active-class="animated bounceInDown"
        leave-active-class="animated bounceOutRight"
      >
      >
        <Box v-show="flag"></Box>
      </transition>


      <transition name="b">
        <Box v-show="flag"></Box>
      </transition>

      <input type="text" v-focus="'111'">
      <!-- <div style="height:100px;width:100px;" v-bg="'blue'"></div> -->
      <div style="height:100px;width:100px;" v-for="(item,index) in list" :key="index" v-img="item"></div>
  </div>
</template>

<script>
// import myList from './components/my-list';
import Box from './components/box';
import axios from 'axios';
import './css/animate.css';
export default {
    data (){
      return{
        list:['http://uploads.oh100.com/allimg/1709/117-1FZ5102542-52.jpg','http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg'],
        flag:false,
        val:''
      }
    },
    mounted() {
      axios.get('/api/recursion').then((res)=>{
        // console.log(res.data);
        this.list = res.data;
      });
    },
    directives:{
      focus:{ //指令名称
        bind(){
          console.log('bind');
        },
        inserted(el,obj){
          console.log(el,obj);
          el.focus();
        },
        update() {
          console.log('update');
        },
      }
    },
    components:{
     Box
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">

  .imgs div{
    height: 120px;
    width: 120px;
    display: inline-block;
  }

  .v-enter,.v-leave-to{
    opacity: 0;
    transform: rotate(360deg);
  }
  .v-enter-active,.v-leave-active{
    transition: all 2s;
  }
  .v-enter-to,.v-leave{
    opacity: 1;
    transform: rotate(0);
  }
  

  .a-enter,.a-leave-to{
    opacity: 0;
    transform: scale(0)
  }
  .a-enter-active,.a-leave-active{
    transition: all 2s;
  }
  .a-enter-to,.a-leave{
    opacity: 1;
    transform: scale(2)
  }


  .b-enter,.b-leave-to{
    opacity: 0;
    transform: translate(-100%);
  }
  .b-enter-active,.b-leave-active{
    transition: all 2s;
  }
  .b-enter-to,.b-leave{
    opacity: 1;
    transform: translate(0);
  }
</style>
