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
        margin:0;
        padding:0;
        box-sizing: border-box;
        list-style: none;
    }
    html,body,#app{
        width:100%;
        height:100%;
        overflow: hidden;
    }

    .wrap{
        width:100%;
        height:100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background: #eee;
    }
    .btn{
        margin:15px;
        background: #fff;
        height:50px;
        box-shadow: 0 0 3px #999;
        text-align: center;
        line-height: 50px;
    }
    .btn  span{
        color:red;
    }
    .con{
        width:100%;
        flex:1;
        overflow: scroll;
    }
</style>
