<template>
    <div class="wrap">
         <g-Header></g-Header>
        <div class="con">
            <pro-item :show="false" v-for="(item,i) in list" :key="i"
                :avgPrice="item.avgPrice"
                :defaultPic="item.defaultPic"
                :distanceStr="item.distanceStr"
                :mainCategoryName="item.mainCategoryName"
                :shopId="item.shopId"
                :shopName="item.shopName"
                :shopPower="item.shopPower"
                :status="item.status"
                @choose="choose"
            ></pro-item>
        </div>
        <div class="car">
            <span><i class="icon iconfont icon-gouwuche-xuanzhong"></i>:{{chooseList.length}}</span>
            <button @click="goCreateForm" :class="{'active':chooseList.length}">确认添加</button>
        </div>
    </div>
</template>
<script>
import gHeader from '../components/gHeader'
import proItem from '../components/proItem'
export default {
    components:{
        proItem,
        gHeader
    },
    data(){
        return {
            list:[],
            chooseList:[]
        }
    },
    created(){
        this.chooseList = JSON.parse(localStorage.getItem('chooseList')) || [];
        this.$http.get('/api/list').then(res => {
            if(res.data.code == 200){
                let data = res.data.msg.string;
                this.list = data.map(item => {
                    item.status = false
                    this.chooseList.forEach(cItem => {
                        if(cItem.shopId === item.shopId){
                            item.status = cItem.status
                        }
                    })
                    return item
                })
            }
        })
    },
    methods:{
        choose(shopId,text){
            if(text === '-'){ //添加
                let index = this.list.findIndex(item => item.shopId === shopId);
                this.list[index].status = true;
                this.chooseList.push(this.list[index]);
            }else{ //删除
                let delIndex = this.chooseList.findIndex(dItem => dItem.shopId === shopId);
                this.chooseList.splice(delIndex,1);
            }
            window.localStorage.setItem('chooseList',JSON.stringify(this.chooseList));
        },
        goCreateForm(){
            if(this.chooseList.length){
                this.$router.push('/createForm')
            }else{
                alert('还没选择')
            }
        }
    },
    beforeDestroy(){
        this.$bus.$emit('choose',this.list)
    }
}
</script>
<style>
    .car{
        width:100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        background: #333;
    }
   .car span{
       width:60px;
       height:50px;
       line-height: 50px;
        margin-left:10px;
   }
   .car span i{
       width:100px;
       height:100px;
       border-radius: 50%;
       background: #fff;
       font-size: 40px;
       text-align: center;
   }
    .active{
        background: red;
    }
</style>

