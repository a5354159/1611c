<template>
    <div class="wrap">
        <g-Item></g-Item>
        <div class="title">
            主题：<input type="text" placeholder="朕决定投票以顺民意">
        </div>
        <router-link class="btn" to="/list" tag="div">+添加喜欢的餐厅</router-link>
        <div class="con">
            <pro-item v-for="(item,i) in chooseList" :key="i"
                :avgPrice="item.avgPrice"
                :defaultPic="item.defaultPic"
                :distanceStr="item.distanceStr"
                :mainCategoryName="item.mainCategoryName"
                :shopId="item.shopId"
                :shopName="item.shopName"
                :shopPower="item.shopPower"
                @del="del"
            ></pro-item>
        </div>
        <div class="bottom">
            <p @click="$router.push({name:'create',params:{id:id}})">生成投票</p>
        </div>
    </div>
</template>
<script>
import gItem from '../components/gItem'
import proItem from '../components/proItem'
export default {
    components:{
        proItem,
        gItem
    },
    created(){
        this.chooseList = JSON.parse(localStorage.getItem('chooseList')) || [];
    },
    data(){
        return {
            chooseList:[],
            id:[]
        }
    },
    methods:{
        del(shopId){
            let delId = this.chooseList.findIndex(item => item.shopId === shopId);
            this.chooseList.splice(delId,1);
            window.localStorage.setItem('chooseList',JSON.stringify(this.chooseList));
        }
    }
}
</script>
<style>
    .title{
        width:100%;
        height:50px;
        background: #fff;
        margin-top:10px;
        padding: 0 10px;
        box-sizing: border-box;
    }
    .title input{
        width:300px;
        height:50px;
        border:0;
    }
    .bottom{
        width:350px;
        height:50px;
        background: orangered;
        text-align: center;
        line-height: 50px;
        margin: 0 auto;
        border-radius: 35px;
        color:#fff;

    }
</style>

