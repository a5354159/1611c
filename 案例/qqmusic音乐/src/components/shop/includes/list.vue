<template>
    <scroller scrollerWrap="scrollerShop" :scrollbar="false">
    <ul>
        <li v-for="(list,index) in productList">
        <div>
            <input type="checkbox" v-model="list.ischeck" @change="checkItem">
        </div>
            <dl>
                <dt class="col-xs-4">
                    <img :src="list.url">
                </dt>
                <dd class="col-xs-8">
                    <div class="name">商品名称：<span>{{list.name}}</span></div>
                    <div class="price">价格：{{list.price}}元</div>
                    <div>
                        <span class="counter" @click="minus(index)">-</span>
                        <span v-text="list.count"></span>
                        <span class="counter" @click="plus(index)">+</span>
                    </div>
                </dd>
            </dl>
        </li>
    </ul>
    </scroller>
</template>
<script>
    import scroller from "../../scroll/scroller.vue";
    export default{
        name:"app",
        props:["productList"],
        data(){
            return{
                msg:""
            }
        },
        methods:{
            send(){
                this.$emit("message",this.msg)
            },
            minus($index){
                if(this.productList[$index].count<=0)return
                this.productList[$index].count--
                this.$emit("update")
            },
            plus($index){
                this.productList[$index].count++
                this.$emit("update")
            },
            checkItem(){
                this.$emit("update")
            }
        },
        components:{
            scroller
        }
    }
</script>
<style lang="" scoped>
    
     ul{
        list-style:none;
        padding:0;
    }
     ul li{
        display:flex;
    }
     ul li dl{
        display:flex;

    }
     ul li dd{
        padding-left:10px;
    }
     ul li dl img{
        width:100%;
    }
     @media screen and (min-width:720px) {
          ul li dl img{
            max-width:500px;
         }
    }
    .counter{
        padding-left: 5px;
        padding-right: 5px;
        text-align: center;
        border:1px solid #ccc;
    }
</style>
