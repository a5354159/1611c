<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
    }
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
html,body,#app,.content{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    .content{
        display: flex;
        flex-direction: column;
            .section{
              flex:1;
              .tit{
                  width: 100%;
                  height:44px;
                  background: #aaa;
                  line-height: 44px;
                  h2{
                      font-size:20px;
                  }
              }
            }
            .footer{
              width: 100%;
              height:44px;
              position: absolute;
              bottom: 0;
              left: 0;
              display: flex;
              background: #ccc;
              justify-content: space-around;
              align-items: center;
              font-size:20px; 
              dl{
                &.active{
                  color: #f00;
                }
                dt{
                  text-align: center;
                }
              }
            }
    } 
}

</style>
