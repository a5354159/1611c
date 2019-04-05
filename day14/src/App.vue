<template>
  <div id="app">
    <header>
        <div class="tit">
          <h2>列表</h2>
          <span>新增</span>
        </div>
        <div class="bom">
            <div>
              <span>类型</span>
              <span>号码/账号</span>
              <span>提示内容</span>
            </div>
            <span>操作</span> 
        </div>
    </header>
    <section>
        <lists />
    </section>
  </div>
</template>

<script>
import Lists from './components/list';
export default {
  components:{
     Lists
  },
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
    @import './scss/common.scss';
    @import './scss/_mixin.scss';
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      @include box_flex;
      @include direction(column);
      width: 100%;
      height: 100%;
      header{
        width: 100%;
        height: pxTorem(87px);
        @include box_flex;
        @include direction(column);
        @include sizing;
        .tit{
          width: 100%;
          height: 40%;
          @include box_flex;
          @include align(center);
          @include justify(space-between);
          padding: 0 pxTorem(20px);
          @include sizing;
            >h2{
              font-size:pxTorem(45px);
              font-weight: 800;
            }
            >span{
              color: #337AB7;
            }
        }
        .bom{
          width: 96%;
          @include flex;
          @include box_flex;
          border-bottom:2px solid #ccc;
          text-align: center;
          @include align(center);
          margin: 0 auto;
          @include justify(space-between);
        }
      }
      section{
        @include flex;
        .lists{
          width: 100%;
          ul>li{
            @include box_flex;
            width: 96%;
            margin: 0 auto;
            height: pxTorem(47px);
            border-bottom: 1px solid #ccc;
            @include justify(space-between);
            @include align(center);
            >div{
              span{
                margin: 0 pxTorem(5px)
              }
            }
            >span{
              width:pxTorem(30px);
              height:pxTorem(37px);
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }

</style>
