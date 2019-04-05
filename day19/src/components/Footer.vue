<template>
    <footer>
        <router-link to="/home" tag="dl">
            <dt><i class="iconfont icon-shouye"></i></dt>
            <dd>首页</dd>
       </router-link>
        <router-link to="/classify" tag="dl">
            <dt><i class="iconfont icon-tongjitu111"></i></dt>
            <dd>分类</dd>
       </router-link>
        <router-link to="/shop" tag="dl" class="shop">
            <dt><i class="iconfont icon-gouwuche"></i></dt>
            <dd>购物车<p>{{sum}}</p></dd>
        </router-link>
        <router-link to="/me" tag="dl">
            <dt><i class="iconfont icon-wode"></i></dt>
            <dd>我的</dd>
        </router-link>
    </footer>
</template>
<script>
export default {
    data(){
        return {}
    },
    props:['sum']
}
</script>
<style>
    footer{
        width: 100%;
        height: 44px;
        display: flex;
        text-align: center;
        align-items: center;
    }
    footer>dl{
        flex: 1;
    }
    .router-link-active>dt>i{
        color: #F7D247;
    }
    .shop{
        position: relative;
    }
    .shop p{
        position: absolute;
        right: 18px;
        top:-25px;
        width: 30px;
        height: 30px;
        background: #EC4E3E;
        border-radius:50%; 
        color: #fff;
        line-height: 30px;
    }
</style>
