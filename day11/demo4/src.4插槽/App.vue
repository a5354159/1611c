<template>
  <div id="app">
    <my-header>
      
      <b>京东超市</b>
      
      <template v-slot:button>
        <button>按钮</button>
      </template>
    </my-header>
    <my-header>
      <input type="text" placeholder="周一">
    </my-header>
    <my-header>
      <template v-slot:default="obj">
        <em v-for="(item,index) in obj.lists" :key="index">{{item.title}}</em> 
      </template>
    </my-header>
  </div>
</template>
<script>
import myHeader from './components/myHeader';
export default {
  data(){
    return {

    }
  },
  created() {
    console.log(this,'父');
  },
  components:{
    myHeader
  }
}
</script>