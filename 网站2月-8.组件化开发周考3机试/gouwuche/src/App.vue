<template>
    <div id="app">
        <header class="header">
            <span>菜单</span>
            <span>评价</span>
            <span>商品</span>
        </header>
        <div class="section">
            <div class="left">
                <ul>
                    <li v-for="(item,index) in classify" :key='index' @click="change(item.id)">
                        {{item.name}}
                    </li>
                </ul>
            </div>
            <div class="right">
                <el-list v-for="(item,i) in list" :key="i"
                    :url="item.url"
                    :price="item.price"
                    :title="item.title"
                    :num="item.num"
                    :id="item.id"
                ></el-list>
            </div>
        </div>
        <footer @click="isShow = !isShow">
            <span>总价格:{{totalNum}}</span>
            <span>去结算：{{totalMoney}}</span>
        </footer>
        <el-dialog :buyList="buyList" v-show="isShow" @close="isShow = !isShow" @clear="clear"></el-dialog>
    </div>
</template>

<script>
import elList from './components/elList'
import elDialog from './components/elDialog'
export default {
    name: 'App',
    components: {
        elList,
        elDialog
    },
    data(){
        return {
            list:[],
            classify:[],
            buyList:[],
            isShow:false
        }
    },
    computed:{
        totalNum(){
            let num = 0;
            this.buyList.forEach(item => {
                num += item.num
            })
            return num
        },
        totalMoney(){
            let money = 0;
            this.buyList.forEach(item => {
                money += item.num * item.price
            })
            return money
        }
    },
    created(){
        this.getData();
        this.$bus.$on('buyCar',(id,type) => {
            let bInd = this.buyList.findIndex(item => item.id === id);
            let index = this.list.findIndex(item => item.id === id);
            if(type === 'add'){
                if(bInd === -1){
                    this.list[index].num++;
                    this.buyList.push(this.list[index])
                }else{
                    this.buyList[bInd].num++;
                }
            }else{
                this.buyList[bInd].num--;
                if(this.buyList[bInd].num < 1){
                    this.buyList.splice(bInd,1);
                }
            }
        })
    },
    methods:{
        getData(){
            this.$http.get('/api/classify').then(res => {
                if(res.data.code === 1){
                    this.classify = res.data.data;
                    console.log(this.classify)
                }
                return this.$http.get('/api/list',{params:{id:res.data.data[0].id}})
            }).then(result => {
                let data = result.data.data.map(item => {
                    item.num = 0;
                    return item
                })
                this.list = data;
            })
        },
        change(id){
            this.$http.get('/api/list',{params:{id:id}}).then(res => {
                if(res.data.code === 1){
                    console.log(res.data.data);
                    let data = res.data.data.map(item => {
                        item.num = 0;
                        return item
                    })
                    this.list = data;
                }
            })
        },
        clear(){
            this.buyList.splice(0);
            this.list.forEach(item => {
                item.num = 0;
            })
            this.isShow = false;
        }
    }   
}
</script>

<style lang="scss">
    *{
        margin:0;
        padding:0;
        list-style: none;
        box-sizing:border-box;
    }
body,html,#app{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
.header{
    width:100%;
    height:45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ccc;
    padding: 0 10px;
    span{
        font-size: 20px;
    }
}
.section{
    width:100%;
    flex:1;
    overflow: hidden;
    display: flex;
    .left{
        width:100px;
        height:100%;
        text-align: center;
        ul li{
            height:70px;
            line-height: 70px;
            border:1px solid #ccc;
        }
    }
    .right{
        flex:1;
    }
}
footer{
    width:100%;
    height:54px;
    display: flex;
     justify-content: space-between;
     align-items: center;
     text-align: center;
    span:nth-child(1){
       width:300px;
       height:54px;
       line-height: 54px;
       background: #000;
       color:#fff;
    }
     span:nth-child(2){
       width:100px;
       height:54px;
       line-height: 54px;
       background: gold;
       color:#fff;
    }
}
</style>
