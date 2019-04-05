<template>
    <div class="scl">
        <h2>{{list.title}}</h2>
        <div class="cont" ref="cont">
            <div class="pic">
                <dl v-for="(item,index) in list.cont" :key="index">
                    <dt>
                        <img :src="item.img" alt="">
                    </dt>
                    <dd>
                       <div><span>{{item.txt}}</span></div>
                       <div><span>￥{{item.tlt}}</span> <i class="iconfont icon-gouwuche" @click="add(item)"></i></div>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll';
export default {
    name:'reserveInfo',
    data(){
        return {
            
        }
    },
    props:['list'],
   methods:{
       add(item){
        this.$bus.$emit('adds',item)
       }
   }
     
}
</script>

<style>
    .scl>h2{
        text-align: center;
        height: 30px;
    }
    .cont{
        width: 100%;
        height: 200px;
        box-sizing: border-box;
        overflow-x: auto;
    }
    .pic{
        display: flex;
        
    }
    .pic>dl{
        width: 30%;
        margin:0 15px;
        text-align: center;
        
    }
    .pic>dl>dd div:nth-child(2){
        display: flex;
        justify-content: space-between;
    }
    .pic>dl>dd div:nth-child(2) i{
        width: 30px;
        height: 30px;
        background: chocolate;
        border-radius:50%;
        line-height: 30px; 
    }
    img{
        width: 80px;
        height: 80px;
        margin: 10px;
    }
</style>
