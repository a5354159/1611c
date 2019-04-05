<template>
  <div id="app">
      <header class="header">
        <div>
          <span>&lt;</span><input type="text" placeholder="请输入类别或者关键字"><span><img src="../src/img/1.png" alt="" srcset=""></span>
        </div>
        <div>
          <ul>
            <li>为您推荐</li>
            <li>高薪推荐</li>
            <li>福利专区</li>
          </ul>
        </div>
        </header>
    <my-list></my-list>
  </div>
</template>

<script>
import myList from './components/list'
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
    myList
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #999;
  .header{
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    &>:nth-child(1) div{
      display: flex;
    }
  }
}


</style>
