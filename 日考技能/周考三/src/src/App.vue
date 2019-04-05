<template>
  <div id="app">
      <header>
        <my-box :helist='helist' :ind = ind></my-box>
      </header>
      <section>
        <my-body></my-body>
        <div class="btons">
          <input type="reset">
          <input type="submit">
          </div>  
      </section>
  </div>
</template>

<script>
    // 引用组件
    import myBox from  "./components/myBox.vue";
    import myBody from './components/myBody.vue'
    export default {
      //注册组件
      components:{
        myBox,
        myBody
      },
      name: 'app',
      mounted(){
        this.$http.get('/api/header').then((res)=>{
         this.helist=res.data
        })
      },
      data () {
          return {
            helist:[],
            ind:0
          }
      }
    }
</script>

<style lang="scss">
//引用 scss
@import './scss/_mixin.scss';
@import './scss/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @include box_flex;
  @include direction(column);
  width: 100%;
  height: 100%;
  header{
     height: pxTorem(80px);
     margin: 30px 0;
        .box{
            ul{
              @include box_flex;
              @include flexWrap(wrap);
              @include align(center);
              li{
                width: 50%;
                >i{
                  display: inline-block;
                  width: pxTorem(30px);
                  height: pxTorem(30px);
                  border-radius:50%; 
                  border: 1px solid #000;
                }
                .active{
                  background: #00f;
                }
              }
            }
          }
  }
  section{
    @include flex;
    width: 100%;
  }
}
</style>
