<template>
    <div class="shopping">
        <div class="list" v-for="(item,index) in lists" :key="index">
            <span :class="['check',{'active':item.flag}]" @click='checkClick(item)' ></span>
           <div>
               <dl>
                   <dt>
                       <img :src="item.img" alt="">
                   </dt>
                   <dd>
                       <span>{{item.txt}}</span>
                       <div>
                           <span>￥{{item.tlt}}</span>
                            <div>
                                <span v-show="item.count" @click="edlcount(item,index)" class="bg">-</span>
                                <span>{{item.count}}</span>
                                <span @click="addcount(item,index)" class="bg">+</span>
                            </div>
                       </div>
                   </dd>
               </dl>
           </div>
        </div>
        <div class="counts">
            <div>
                <span :class="['check',{'active':allCheck}]" @click="allChecks"></span>
                <div>
                    <span>全选</span>
                    <span class="col">共￥{{cun}}</span>
                </div>
            </div>
           <span>选好了</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Shop',
    data () {
        return {
            cun:0,
            allCheck:false
        }
    },
   props:['lists'],
   methods:{
       checkClick(item){
           item.flag = !item.flag
           this.allCheck = this.lists.every(items=>items.flag)
           this.sumprice()
       },
       allChecks(){
           this.allCheck = !this.allCheck;
           this.lists.map(item=>item.flag=this.allCheck);
           this.sumprice();
       },
       sumprice(){
           this.cun = 0;
           this.lists.forEach(item => {
            if(item.flag){
                this.cun+=item.count*item.tlt;
            }       
           });
       },  
       addcount(item,index){
            let num = item.count+1;
            this.$emit('add',num,index)
            this.sumprice()
        },
        delcount(item,index){
            let num = item.count-1;
            this.$emit('add',num,index)
            this.sumprice()
        }
   },
   created(){
      console.log(this.lists)
   }
}
</script>
<style>
.shopping{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
}
.shopping .list{
    display: flex;
     width: 100%;
}
.shopping .list>div{
     flex: 1;
}
.shopping .list dl{
    flex: 1;
    display: flex;
}
.shopping .list div dl dd{
    flex: 1;
    display: flex;
    flex-direction:column;
}
.shopping .list dl dd>span{
    height: 50px;
    line-height: 50px;
}
.shopping .list dl dd>div{
    display: flex;
    justify-content: space-between;
}
.shopping .list dl dd>div>span{
    color: #EC5528;
    font-size: 25px;
}
.shopping .counts{
    width: 100%;
    display: flex;
}
.counts>div{
    width: 45%;
    display: flex;
}
.counts>div>span,.list>span{
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius:50%;
    margin:  0 10px; 
}
.active{
    background: url('../../static/dui.png') no-repeat;
    background-size:20px 20px; 
}
.counts>span{
    flex: 1;
    text-align: right;
}
.list>span{
    margin-top:40px; 
}
.bg{
    width: 30px;
    height: 30px;
    display: inline-block;
    border: 1px solid #ED6C3D;
    box-sizing: border-box;
    color: #ED6C3D;
    line-height: 27px;
    border-radius:50%;
    text-align: center;
    margin: 0 10px;
    font-size:20px;
    font-weight: 800;  
}
.counts .col{
    font-size:18px;
    color: #EC5528; 
}
</style>


