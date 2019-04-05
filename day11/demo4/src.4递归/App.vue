<template>
    <div id="app">
        <my-li :list="list"></my-li>
    </div>
</template>
<script>
import Eventbus from './js/eventbus';
import myLi from './components/myLi';
import axios from 'axios';
export default {
  data(){
    return {
       list:[]
    }
  },
  created() {
    axios.get('/api/data').then((res)=>{
      console.log(res);
      this.list = res.data;
    });
  },
  components:{
    myLi
  },
  computed: {
    
  }
}


</script>


