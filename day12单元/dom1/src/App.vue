<template>
  <div id="app">
      <div class="header">
        <span>&lt;</span>
        <b>{{grand}}</b>
        <img :src="img" alt="">
      </div>
    
  </div>
</template>

<script>
export default {
    data(){
        return {
          grand:'经典必听',
          img:'/img/1.jpg'
        }
    }
}
</script>

<style>
*{padding: 0;margin: 0;list-style: none;text-decoration: none;}
#app {
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
}
.header{
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  box-sizing: border-box;
  align-items: center;
  border-bottom:1px solid #ccc; 
}
.header img{
  width: 20px;
  height: 20px;
  background: url('./img/1.jpg') no-repeat;
  background-size:15px 15px; 
  vertical-align: -webkit-baseline-middle;
}
</style>
