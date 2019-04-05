<template>
  <div id="app">
      <header>
        星拼悦蛋糕礼
      </header>
      <main>
        <div class="pic">
          <img src="./image/f.jpg" alt="">
        </div>
        <MyMenu></MyMenu>
      </main>
      
  </div>
</template>

<script>
import MyMenu from "./views/menu";
export default {
  data () {
    return {
     
    }
  },
  components:{
    MyMenu
  }
}
</script>
<style lang="scss">
@import "./scss/common.scss";
@import "./scss/_minix.scss";
#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header{
  width: 100%;
  height: pxTorem(45px);
  background: white;
  text-align: center;
  line-height: pxTorem(45px);
  font-size: pxTorem(20px);
  vertical-align: middle;
}
main{
  width: 100%;
  flex: 1;
  background: #f1f2f2;
  overflow: auto;
  display: flex;
  flex-direction: column;
  .pic{
    width: 100%;
    height: pxTorem(150px);
    img{
      width: 100%;
      height: 100%;
    }
  }
}

</style>
