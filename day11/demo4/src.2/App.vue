<template>
    <div id="app">
        <header>头部</header>
        <my-content></my-content>
        <my-footer></my-footer>
    </div>
</template>

<script>
import axios from 'axios'
import myFooter from './components/my-footer';
import myContent from './components/my-content';
export default{
    data(){
        return{

        }
    },
    components:{
        myFooter,
        myContent
    }
}
</script>

<style>
/* @import "./scss/common.css"; */
#app{
    width:100%;
    height: 100%;
    overflow: scroll;
}
</style>
