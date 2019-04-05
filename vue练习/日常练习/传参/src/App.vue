<template>
  <div id="app">
    <Box :arr='arr' @add='adds'/>
  </div>
</template>

<script>
import Box from './components/add'
export default {
  name: 'app',
  data () {
    return {
     arr:[{
       tit:'菜单',
       id:1

     },{
       tit:'菜单1',
       id:2

     },{
       tit:'菜单2',
       id:3

     },{
       tit:'菜单3',
       id:4
     }]
    }
    
  },
  methods:{
    adds(num){
      console.log(num.b)
    } 
  },
  components:{
    Box
  },
  created(){
    console.log(this)
    this.$bus.$on('nums',(s)=>{
        console.log(s.s)
    })
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:12px; 
}

</style>
