<template>
  <div id="app">
    <my-header :back="true">
      <b>京东超市</b>
      <template v-slot:button>
        <button>按钮</button>
      </template>
    </my-header>
    <my-header>
      <input type="text" placeholder="1611C">
    </my-header>
    <my-header>
      <template v-slot:default = obj>
        <!-- {{obj}} -->
        <span v-for="(item,index) in obj.aa " :key="index" >{{item.title}}</span>
       
      </template>
    </my-header>
  </div>
</template>
<script>
import myHeader from './components/my-header';
export default {
  data(){
    return{

    }
  },
  components:{
    myHeader
  }
}
</script>