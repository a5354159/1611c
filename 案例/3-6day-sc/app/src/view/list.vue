<template>
 <div class="wrap">
     <header>
         <li @click='$router.push("/login")'>我的书架</li>
         <li>玄幻</li>
         <li>奇幻</li>
         <li>武侠</li>
         <li>仙侠</li>
         <li>都市</li>
         <li>现实</li>
     </header>
     <section>
         <dldt v-for="(item,index) in list" :key="index"
         :title=item.title
         :avatar=item.avatar
         :id=item.id
         :summary=item.summary
         :tags=item.tags
         :tip_welth_sum=item.tip_welth_sum
         :author=item.author
         :cmp="item.cmp"
         ></dldt>
     </section>
     <footer></footer>
 </div>
</template>
<script>
import dldt from '@/components/dldt'
export default {
    components:{
        dldt
    },
    data(){
        return {
        list:[],
        bnnr:[]
        }
    },
    methods:{
        getData(){
            this.bnnr = JSON.parse(localStorage.getItem('code')) || [];
            this.$http.get('/api/list').then((data)=>{
               let top=data.data.data.data.map(item=>{
                   item.cmp=false
                   this.bnnr.forEach(items=>{
                       if(items.id==item.id){
                           item.cmp = items.cmp
                       }
                   })
                   return item
               })
               this.list=top
               console.log(this.list)
            })
        }
    },
    created(){
        this.getData();
        this.$bus.$once('sole',(id)=>{
              this.bnnr.push(this.list.find(item=>{
                  if(item.id===id*1){
                      item.cmp = true
                  }
                  return item.id === id*1
                }
              ))
              window.localStorage.setItem('code',JSON.stringify(this.bnnr))
        })
    },
    mounted(){

    }
}
</script>
<style lang='scss'>
*{
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    font-size: 12px;
}
html,body,#app,.wrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.wrap{
    display: flex;
    flex-direction: column;
}
header,footer{
    width: 100%;
    height: 44px;
}
section{
    flex: 1;
    overflow-y: auto;
    dl{
    width: 100%;
    height: auto;
    display: flex;
    dt{
        flex:3;
        img{
            width: 100%;
        }
    }
    dd{
        flex:7;
        line-height: 2.5;
        padding: 0 15px;
        p{
            width:100%;
            display: flex;
            justify-content: space-between;
            &:nth-of-type(3){
                display:-webkit-box;
                word-break:break-all;
	            -webkit-box-orient:vertical;
	            -webkit-line-clamp:2;
	            overflow:hidden;
	            text-overflow:ellipsis;
            }
            button{
                background: red;
                color: #fff;
                border: 0;
                padding: 5px;
            }
        }
    }
}
}
header{
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    align-items: center;
}
</style>