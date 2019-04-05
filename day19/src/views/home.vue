<template>
    <div>
       <div class="banner">
           <div class="tits">
               <span><i class="iconfont icon-didian"></i>配送致：西二旗大街<i class="san"></i></span>
               <i class="iconfont icon-fangdajing"></i>
            </div>
          <Banner/>
       </div>
        <div class="contScoll">
                <Scrllo :list='list'/>
          </div>
    </div>
</template>
<style>
.banner{
    width: 100%;
    height: 140px;
    background: #F9D849;
    padding: 0 20px;
    box-sizing: border-box;
} 
.banner> .tits{
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
}
.banner> .tits>span>.san{
    display: inline-block;
    width: 0;
    height: 0;
    border:5px solid transparent;
    border-top: 5px solid #000;
    position: absolute;
    top:10px;
    margin-left:5px; 
}
.contScoll{
    margin-top:50px;
     overflow: hidden; 
}
</style>
<script>
export default {
    data(){
        return {
            list:[]
        }
    },
   created(){
       this.$http.get('/api/list').then((res)=>{
           this.list=res.data[0]
       })
   }
}

</script>
