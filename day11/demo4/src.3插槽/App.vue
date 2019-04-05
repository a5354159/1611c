<template>
    <div id="app">
       <my-header :back="false">
           <template>
              <b>京东超市</b>
           </template>
           <template v-slot:search>
              <!-- 同一组件出现两个slot需要使用template -->
                <button >按钮</button>
                   
               
           </template>
           <!-- <button v-slot:search>按钮</button> -->
       </my-header>
       <my-header>
           <input type="text" placeholder="小花">
       </my-header>
       <my-header>
           <template v-slot:default="{list,names}">
               {{names}}
               <ul>
                    <li v-for="(item,index) in list" :key="index">{{item.title}}</li>
                </ul>
           </template>
          
       </my-header>
    </div>
</template>

<script>
import axios from 'axios'
import myHeader from './components/myHeader'
import parent from './components/parent'


export default {
    name: 'App',
    data(){
        return {
            list:[],
            chooseObj:{}
        }
    },
    components:{
        myHeader,
        parent
    },
    created(){
       
    },
    methods:{
       
    }

}
</script>

<style>
/* @import "./scss/common.css"; */
#app{
    width:100%;
    height: 100%;
}
</style>
