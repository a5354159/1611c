<template>
  <div id="app">
    <header>
        <el-header></el-header>
    </header>
    <section>
        <div class="bottom">
            <img src="../static/images/banner.jpg" alt="">
        </div>
        <div class="con">
            <router-view/>
        </div>
    </section>
    <footer>
        <ul>
            <li><router-link to="/" tag="span">首页</router-link></li>
            <li><router-link to="/classify" tag="span">分类</router-link></li>
            <li><router-link to="/list" tag="span">列表</router-link></li>
            <li><router-link to="/my" tag="span">我的</router-link></li>
        </ul>
    </footer>
  </div>
</template>

<script>
import elHeader from './components/elHeader.vue'
export default {
  components:{
		elHeader
	}
}
</script>
<style>
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        list-style: none;
    }
    html,body{
        width:100%;
        height:100%;
        overflow: hidden;
    }

    #app{
        width:100%;
        height:100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    section{
        width:100%;
        flex:1;
        overflow: hidden;
    }
		.bottom{
			margin-bottom: 20px;
		}
		.bottom img{
			width: 100%;;
		}
    footer{
        width: 100%;
        height: 44px;
        background: red;
    }
    footer ul{
        width: 100%;
        height: 44px;
        background: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
