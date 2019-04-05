<template>
   <div class="inp">
       <div class="list">
           <form action="">
               <input type="checkbox"> <label for="">书名/最近更新章节</label>
           </form>
           <p><span>更新时间</span><span>作者</span></p>
           
       </div>
       <div class="add">
             <form action="">
               <input type="checkbox"> <label for="">书名/最近更新章节</label>
           </form>
           <p><span>更新时间</span><span>作者</span></p>
       </div>
   </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            lits:[]
        }
    },
    computed:{

    },
    methods:{
       
    },
    created(){
    //      let id=this.$route.params.id
    //      console.log(id)
    //       this.$http.get('/detail?id='+id).then((data)=>{
    //       console.log(data.data.data)
    //       this.lits.push(data.data.data.filter(item=>item.id===id*1))
    //       console.log(this.lits)
    //   })
    },
    mounted(){

    }
}
</script>
<style lang="scss">
*{
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
}
    .inp{
        width: 100%;
        height: auto;
        padding: 0 15px;
        .list{
            width: 100%;
            height: 44px;
            display: flex;
            justify-content: space-between;
            padding: 0 15px;
            align-items: center;
             border-bottom: 1px solid #ccc;
        }
       
    }
    .add{
            width: 100%;
            height: 44px;
            display: flex;
            justify-content: space-between;
            padding: 0 15px;
            align-items: center;
            border-bottom: 1px solid #ccc;
    }
</style>