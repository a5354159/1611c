<template>
    <div class="list-wrap">
        <div>
            <ul>
                <li>综合</li>
                <li @click="orderFun('price')">按价格排序</li>
                <li @click="orderFun('sale')">按销量排序</li>
                <li>最新</li>
            </ul>
        </div>
        <div class="flower-list">
            <flower-item  v-for="(item,i) in list" :key="i" :obj="item"></flower-item>
        </div>
    </div>
</template>
<script>
import flowerItem from '../components/flowerItem'
export default {
    components:{
        flowerItem
    },
    data(){
        return {
            list:[]
        }
    },
    created(){
        let type = this.$route.params.type;
        this.$http.get('/api/list',{params:{type:type}}).then(res => {
            if(res.data.code === 1){
                this.list = res.data.data.Datas.FlowerList;
                document.title = this.$route.params.LabelName;
            }
        })
    },
    methods:{
        orderFun(type){
            if(type === 'price'){
                this.list = this.list.slice(0).sort((a,b) => a.Price - b.Price);
            }else{
                this.list = this.list.slice(0).sort((a,b) => {
                    let aSales = a.Sales.indexOf('万') != -1?a.Sales.substr(0,a.Sales.length-1)*10000:a.Sales;
                    let bSales = b.Sales.indexOf('万') != -1?b.Sales.substr(0,b.Sales.length-1)*10000:b.Sales;
                    return aSales - bSales
                })
            }
        }
    }
}
</script>
<style lang="scss">
    .list-wrap{
        width:100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        ul{
            width:100%;
            height:45px;
            display: flex;
            align-items: center;
            li{
                width:25%;
                text-align: center;
            }
            li:nth-child(1){
                color:red;
            }
        }
        .flower-list{
            width:100%;
            flex:1;
            overflow: scroll;
            flex-shrink: 0;
        }
    }
</style>

