<template>
  <div id="app">
    <div class="con">
        <router-view/>
    </div>
    <footer>
            <dl>
                <dt><i class="icon iconfont icon-shouye"></i></dt>
                <dd><router-link to="/">首页</router-link></dd>
            </dl>
             <dl>
                <dt><i class="icon iconfont icon-xinlangweibo11"></i></dt>
                <dd><router-link to="/classify">分类</router-link></dd>
            </dl>
             <dl>
                <dt><i class="icon iconfont icon-pengyouquan"></i></dt>
                <dd><router-link to="/list">列表</router-link></dd>
            </dl>
             <dl>
                <dt><i class="icon iconfont icon-wode"></i></dt>
                <dd><router-link to="/my">我的</router-link></dd>
            </dl>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
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
    .con{
        width:100%;
        flex:1;
        overflow: hidden;
    }
    footer{
        width:100%;
        height:54px;
        display: flex;
        align-items: center;
        dl{
            width:25%;
            dt{
                 text-align: center;
                 .icon{
                     font-size: 20px;
                 }
            }
            dd{
                text-align: center;
            }
        }
    }
</style>
