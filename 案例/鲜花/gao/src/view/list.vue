<template>
    <div class="list-wrap">
        <div class="button">
            <button @click="orderFun('price')">按价格排序</button>
            <button @click="orderFun('sale')">按销量排序</button>
        </div>
        <div class="flower-list">
            <flower-item v-for="(item,i) in list" :key="i" :obj="item"></flower-item>
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
        display: flex;
        flex-direction: column;
        .flower-list{
            width:100%;
            height: 380px;
            overflow: auto;
            flex-shrink: 0;
        }
    }
	.button{
		button{
			display: block;
			float: left;
			margin-left: 10px;
			background: #fff;
			padding: 5px;
			height: 30px;
			border:0;
			border:1px solid gray;
		}
	}
</style>

