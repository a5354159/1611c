<template>
  <div id="app">
    <router-view :data="data" />>
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
    
  },
  data() {
    return {
      data:[]
    }
  },
  created() {
     this.$bus.$on('adds',(obj)=>{
       let flag=this.data.findIndex((v)=>v.Label===obj.Label)
       if(flag===-1){
        this.data.push(obj)
       }else{
         this.data.splice(flag,1,obj)
       }
     console.log(this.data)

     })
  },

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  color: #000;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
#app>div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#app>div section{
  flex: 1;
  overflow-y: scroll;
}

</style>
