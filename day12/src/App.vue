<template>
  <div id="app">
     <!-- <router-view></router-view> -->
      <section>
        <router-view></router-view>
      </section>
      <footer>
        <router-link to="/">首页</router-link>
        <router-link to="/detail">详情</router-link>
        <router-link to="/list">列表</router-link>
        <router-link to="/product">我的</router-link>
        <!-- <a href="/">首页</a>
        <a href="/#/detail">详情</a>
        <a href="/#/list">列表</a>
        <a href="/#/product">我的</a> -->
      </footer>
  </div>
</template>

<script>
import axios from 'axios';
import './css/animate.css';
export default {
    data (){
      return{
        
      }
    }
   
}
</script>

<style>

</style>
