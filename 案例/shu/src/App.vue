<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
  list-style:none;
}
body,html,#app,#app>div{
  width:100%;
  height:100%;
}
#app>div{
  display: flex;
  flex-direction: column;
}
main{
  flex:1;
  overflow: auto;
}
</style>
