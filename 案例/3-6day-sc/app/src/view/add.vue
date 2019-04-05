<template>
    <div class="wrap">
        <header>
            <span @click="$router.push('/')">返回</span>
        </header>
        <section>
            <div class="box">
                <dl>
                    <dt>
                        <img :src="lits.avatar" alt="">
                    </dt>
                    <dd>
                        <p><span>{{lits.title}}</span>&nbsp;<span>{{lits.author}}</span>著</p>
                        cmp的值：{{lits.cmp}}
                        <p><button>免费试读</button><buttons :cmp="lits.cmp" :id="lits.id"></buttons><button>投票互动</button></p>
                        
                    </dd>
                </dl>
                <nav>
                    <li>作品信息</li>
                    <li>目录</li>
                    <li>作品讨论</li>
                </nav>
               
            </div>
             <div class="title">
                    {{lits.summary}}
                </div>
        </section>
        <footer></footer>
    </div>
</template>
<script>
import buttons from '../components/button'
export default {
    props:[],


    components:{
        buttons
    },
    data(){
        return {
            lits:{},
            buyList:[]
        }
    },
    created(){
        this.buyList= JSON.parse(window.localStorage.getItem('code'))||[];
        let icon=this.$route.params.id;
        this.$http.get('/detail',{params:{id:icon}}).then((data)=>{
          if(data.data.code==1){
               let lice=data.data.data;
               lice.cmp = false;
               this.buyList.forEach((citem)=>{
                    if(citem.id==lice.id){
                        lice.cmp = citem.cmp
                    }
                })
            
              this.lits=lice;
          }
        })

        this.$bus.$once('sole',(id)=>{
                this.lits.cmp = true;
                this.buyList.push(this.lits)
                window.localStorage.setItem('code',JSON.stringify(this.buyList))
        })
   
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
   .box{
       width: 100%;
       height: auto;
       dl{
           width: 100%;
           height: auto;
           display:flex;
           dt{
               flex:3;
               img{
                   width: 100%;
               }
           }
           dd{
               flex:7;
               padding: 0 15px;
               line-height: 2.5;
               p{
                   &:nth-of-type(2){
                       margin-top: 25px;
                       width: 100%;
                       display: flex;
                       justify-content: space-between;
                       padding: 0 15px;
                       align-items: center;
                       button{
                           padding: 5px 5px;
                           &:nth-of-type(1){

                                background:red;
                                border:0;
                                color:#fff;
                           }
                            &:nth-of-type(2){
                                background:#fff;
                               
                                color:#000000;
                           }
                            &:nth-of-type(3){
                                background:#fff;
                               border:1px solid #ccc;
                                color:#000000;
                           }
                       }
                   }
               }
           }
       }
   }
   nav{
       width: 100%;
       height: auto;
       display: flex;
       justify-content: space-between;
       align-items: center;
       border-bottom:1px solid #ccc;
       padding: 10px 15px;
   }
   .title{
       width: 100%;
       height: auto;
   }

}

</style>