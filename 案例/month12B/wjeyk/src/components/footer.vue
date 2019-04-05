<template>
    <footer>
     <router-link to="/">首页</router-link>
     <router-link to="/type">分类</router-link>
     <router-link to="/wode">我的</router-link>
   </footer>
</template>

<script>

export default {
    data(){
        return {

        }
    }
}
</script>
<style scoped  lang="">
footer{
  background: skyblue;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.router-link-exact-active{
    color: red;
}
</style>