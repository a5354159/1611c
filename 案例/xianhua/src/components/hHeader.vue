<template>
    <div class="wrapper">
        <header>
            <span>花礼网鲜花</span>
            <span><i class="icon iconfont icon-dingwei1"></i></span>
        </header>
        <div class="section">
            <img src="../../static/banner.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .wrapper{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
    }
    header{
        width:100%;
        height:45px;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        box-sizing: border-box;
        align-items: center;
    }
    .section{
        width:100%;
        height:150px;
        img{
            width:100%;
            height:100%;
        }
    }
</style>