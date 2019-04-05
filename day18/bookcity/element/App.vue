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

<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
html,body,#app>div{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
}
#app>div {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}
 section{
    width: 100%;
   flex:1;
 }
 section>.section{
   width: 100%;
   height: 50px;
   display: flex;
   align-items: center;
   padding: 0 15px;
   box-sizing:border-box;
   justify-content: space-between;
   border: 1px solid #ccc;
 }
</style>
