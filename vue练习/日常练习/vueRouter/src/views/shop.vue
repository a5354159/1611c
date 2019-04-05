<template>
    <div class="content">
        <header>
            <i @click="del">&lt;</i>
           <span @click="$router.push({name:'dican'})">点餐</span>
           <span @click="$router.push({name:'conts'})">详情</span>
           <span @click="$router.push({name:'pinlun'})">评价</span>
        </header>
        <section>
           <router-view></router-view>
        </section>
    </div>
</template>
<script>

export default {
    data(){
        return {
        }

    },
    methods:{
        del(){
            this.$router.go(-1)
        }
    }
}
</script>


<style lang="scss">
    header{
        width: 100%;
        height: 44px;
        display: flex;
        background: #ccc;
        align-items: center; 
        >i{
            display: inline-block;
            font-size:23px;
            margin: 0 10px; 
            box-sizing: border-box;
        }   
        span{
            width: 100%;
            text-align: center;
            flex:1;
            font-size:18px; 
        }
        span.active{
            color: #f00;
        }
    }
    section{
        width: 100%;
        flex:1;
        .conts{
            width: 100%;
            height: 100%;
            display: flex;
            .left{
                width: 40%;
                 height: 100%;
                background: #00f;
            }
            .right{
               flex:1;
            }
        }
    }
</style>
