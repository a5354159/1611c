<template>
    <div class="content">   
        <section class="section">
            <div class="tit">
                <h2>首页</h2>
            </div>
            <div class="ipn">
                <input type="text" @click="inpt">
            </div>
            <div class="lis">
                <span v-for="(item,index) in list" :key="index"
                    @click="sm(item.id)"
                >{{item.tit}}</span>
            </div>
        </section>
       <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../components/Footer'
export default {
    components:{
        Footer
    },
    data(){
        return {
            list:[{
                "tit":'店铺1',
                id:1
            },{
                "tit":'店铺2',
                id:2

            },{
                "tit":'店铺3',
                id:3

            }]
        }
       
    },
    created(){
        console.log(this.$router)
    },
    methods:{
        inpt(){
            this.$router.push({path:'/seach'})
        },
        sm(id){
            this.$router.push({name:'shop',params:{id:id}})
        }

    }
   
}
</script>
<style lang="scss" coped>
    .content{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .section{
        width: 100%;
        flex:1;
        .tit{
            height: 44px;
        h2{
            width: 100%; 
            text-align: center;
            font-size:10px; 
        }
    }
    .ipn{
        width: 100%;
        height: 30px;
        margin-top:10px; 
        input{
            width: 100%;
            outline: none;
        }
    }
    .lis{
        display: flex;
        height: 30px;
        line-height: 30px;
        span{
            flex: 1;
            text-align: center;
            font-size:18px; 
        }
    }
    }
    .footer{
            width: 100%;
            height: 44px;
        }
    }
    
   
</style>
