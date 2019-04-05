<template>
  <div id="app">
    <my-list v-for="(item,index) in list" :key="index" :name=item.name :pic=item.pic :id=item.id :sum=item.sum></my-list>
    <div><span>总价：</span><span>总数：</span></div>
  </div>
</template>

<script>
import myList from './components/my-list'
export default {
  name: 'app',
  data () {
    return {
      list:[{
          name:'苹果',
          pic:9,
          id:1,
          sum:0
      },{
          name:'菠萝',
          pic:3,
          id:2,
          sum:0
      }],
      sumList:[]
    }
    
  },
  components:{
    myList
  },
  created(){
    this.$bus.$on('addCont',(sum,id)=>{
      console.log(sum,id)
      let index = this.list.findIndex(item=>item.id==id);
      this.list[index].sum = sum;
    })
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
