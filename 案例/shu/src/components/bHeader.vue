<template>
  <header>
    <i class="icon iconfont icon-zuojiantou-01" @click="$router.go(-1)"></i>
    <router-link to="/">书城</router-link>
    <router-link to="/bookshelf">书架</router-link>
    <i class="icon iconfont icon-shouye" @click="$router.push('/')" ></i>
  </header>
</template>

<script>
export default {
 
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
  box-sizing: border-box;
}
  header{
    width:100%;
    height:50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: lightblue;
    padding:0 10px;
    i{
      font-size: 22px;
    }
  }
</style>
