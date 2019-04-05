<template>
  <div id="app">
    <my-header></my-header>
    <section>
        <ul>
          <my-list v-for="(item,index) in list" :key="index" :grade="item.grade" :name="item.name"></my-list>
        </ul>
    </section>
    <my-footer @addConent="add"></my-footer>
  </div>
</template>

<script>
import myFooter from './components/my-footer'
import myHeader from './components/my-header'
import myList from './components/my-list';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    myFooter,
    myHeader,
    myList
  },
  data(){
    return{
      list:[]
    }
  },
  mounted() {
    axios.get('/api/list').then((res)=>{
      if(res.data.code == 0){
        this.list = res.data.list;
        console.log(res.data.list);
      }
    });
  },
  methods: {
    add(val){
      this.list.push({grade:"1611C",name:val});
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import './scss/common.scss'; 
@import './scss/_mixin.scss';
#app {
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  overflow: hidden;
  @include box_flex;
  @include direction(column);

  section{
    @include flex;
    overflow-y: auto;
  }
}
</style>
