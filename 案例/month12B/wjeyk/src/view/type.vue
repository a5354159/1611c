<template>
    <div>
        <header>
            <h1>分类</h1> 
        </header>
        <section>
            <dlist :catagory="catagory"></dlist>
        </section>
        <foote></foote>        
    </div>
</template>

<script>

import foote from '@/components/footer'
import dlist from '@/components/dlist'
import catagory from '@/data/catagory.json'
export default {
  name: 'App',
  components:{
    foote,
    dlist
  },
  data() {
      return {
          catagory,
      }
  },
  created() {
    
  },
}
</script>
<style scoped  lang="">
    header{
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: skyblue;
    }
    header>h1{
        margin-left:30px;
    }
    section{
        /* display: flex;
        flex-direction: column; */
    }
   
</style>