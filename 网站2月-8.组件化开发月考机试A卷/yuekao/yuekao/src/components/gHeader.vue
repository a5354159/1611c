<template>
<div>
     <header>
        <p>
            <i class="icon iconfont icon-zuojiantou-01"></i>
            <span>选择参与投票的商户</span>
        </p>
            <i class="icon iconfont icon-dingwei"></i>
    </header>
    <div class="inp">
        <input type="text" placeholder="请输入商户名、地点、找优惠">
    </div>
    <ul class="cent_lists">
        <li>附近</li>
        <li>美食</li>
        <li>智能排序</li>
    </ul>
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
    header{
        width:100%;
        height:45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        padding: 0 10px;
        box-sizing: border-box;
    }
    .icon{
        font-size: 16px;
    }
    .inp{
        width:100%;
        height:45px;
        
        input{
            width:100%;
            height:45px;
            border:0;
            text-align: center;
            background: #ccc;
            font-size: 17px;
        }
    }
    .cent_lists{
        width:100%;
        height:54px;
        display: flex;
        background: #fff;
        align-items: center;
        border-bottom: 1px solid #ccc;
        li{
            width:33.3%;
            text-align: center;
        }
    }
</style>