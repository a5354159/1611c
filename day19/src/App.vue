<template>
  <div id="app">
    <router-view :lists='shoplist' @add='addfn'/>
    <Footer :sum='totalCount'/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      shoplist:[]
    }
  },
  computed:{
    totalCount(){
      return this.shoplist.reduce((prev,cur)=>prev+cur.count,0)
    }
  },
  created(){
    this.$bus.$on('adds',(data)=>{
      console.log(data)
        let index = this.shoplist.findIndex(item=>item.id==data.id);
        console.log(index)
        if(index==-1){
          // data.count = 1;
          this.$set(data,'count',1);
          this.$set(data,'flag',false);
          this.shoplist.push(data);
        }else{
          this.shoplist[index].count++;
        }
        console.log(this.shoplist)
    })
  },
  methods:{
    addfn(num,index){
      this.shoplist[index].count=num;
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction:column; 
}
#app>div{
  flex:1;
}
</style>
