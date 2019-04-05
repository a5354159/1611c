<template>
  <header>
    <i class="icon iconfont icon-27" @click="$router.go(-1)"></i>
    <router-link to="/">书城</router-link>
    <router-link to="/bookshelf">书架</router-link>
    <i class="icon iconfont icon-shouye" @click="$router.push('/')" ></i>
  </header>
</template>

<script>

export default {
  data(){
    return {
      
    }
  },
  methods:{
    
  }
}
</script>
<style scoped  lang="scss">
header{
  width: 100%;
  height:50px;
  display:flex;
  justify-content: space-around;
  align-items: center;
  background:orange; 
  i{
    font-size:22px;
  }
}
</style>