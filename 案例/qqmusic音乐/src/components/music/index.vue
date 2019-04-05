<template>
    <div class="wrapper">
        <header class="header text-center">
            <h1 class=" mt0 mb0 ">QQ音乐</h1>
        </header>
        <section class="content">
            <ul class="clearfix text-center">
                    <li class="col-xs-4">
                        <router-link class="pt10 pb10"  to="/music/rank" >推荐</router-link>
                    </li>
                    <li class="col-xs-4">
                        <router-link class="pt10 pb10"  to="/music/toplist" >排行榜</router-link>
                    </li>
                    <li class="col-xs-4">
                        <router-link class="pt10 pb10"  to="/music/search" >搜索</router-link>
                    </li>
            </ul>
                <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
        </section>
    </div>
</template>
<script>
    import animate from "animate.css"
    export default {
        name:"app"
    }
</script>
<style lang="" scoped>
    .content{
        height:100%;
        display:flex;
        flex-direction: column;
    }
    .banner{
        height:100%;
        display:flex;
        flex-direction: column;
        clear: both;
    }
    .header{
        position: relative;
        z-index: 99;
    }
    .clearfix{
        background: #fff;
        position: relative;
        flex-shrink: 0;
        z-index: 99;
    }
</style>