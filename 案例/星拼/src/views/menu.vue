<template>
    <div>
        <div class="content">
            <MyList v-for="(item,i) in navListData "
            :key="i"
            :title="item.title"
            :price="item.price"
            :img="item.img"
            :id="item.id"></MyList>
        </div>
        <footer>
            <div class="carion" @click="car">
                购物车
                <span>{{sumcount}}</span>
            </div>
            <p>总价:￥<b>{{sumprice}}</b></p>
            <div class="dialog" v-show="flag">
                <div class="box">
                    <Dialog v-for="(item,i) in getItemData" 
                    :key="i"
                    :title="item.title"
                    :img="item.img"
                    :price="item.price">
                       
                    </Dialog>
                </div>
            </div>
        </footer>
    </div> 
</template>
<script>
import MyList from "../components/list";
import Dialog from "../components/Dialog";
export default {
    data(){
        return {
            navListData:[],
            localData:[],
            sumcount:0,
            sumprice:0,
            flag:false,
            getItemData:[]
        }
    },
    created(){
        this.getData();
    },
    methods:{
        getData(){
            this.$ajax.get('/api/list').then(res=>{
                this.navListData=res.data.list;
            });
            this.$bus.$on('addJoin',res=>{
                let {id}=res;
                let index=this.localData.findIndex(item=>item.id===id);
               if(index!=-1){
                   this.localData.splice(index,1,res);
               }else{
                   this.localData.push(res);
               }
            //    console.log(this.localData);
               localStorage.setItem('car',JSON.stringify(this.localData));
               this.sumcount=this.localData.reduce((p,n)=>p + n.count,0);
               this.sumprice=this.localData.reduce((p,n)=>p+n.count * n.price,0)
            })
        },
        car(){
            this.flag=true;
           this.getItemData=JSON.parse(localStorage.getItem('car'));
           console.log(this.getItemData);
        }
    },
    components:{
        MyList,
        Dialog
    }
}
</script>
<style lang="scss" scoped>
@import "../scss/common.scss";
@import "../scss/_minix.scss";
div{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.content{
    width: 100%;
    flex: 1;
    overflow: auto;
    // background: white;
}
footer{
    width: 100%;
    height: pxTorem(45px);
    background: palegoldenrod;
    display: flex;
  .carion{
      width: pxTorem(45px);
      height: pxTorem(45px);
      border-radius: 50%;
      background: skyblue;
      line-height: pxTorem(45px);
      text-align: center;
      position: relative;
      font-size: pxTorem(14px);
      span{
          position: absolute;
          right: 0;
          top: pxTorem(-10px);
          width: pxTorem(20px);
          height: pxTorem(20px);
          background: red;
          border-radius: 50%;
          text-align: center;
          line-height: pxTorem(20px);
      }
  }
  p{
      line-height: pxTorem(45px);
      margin-left: pxTorem(15px);
      height: pxTorem(45px);
      b{
          color: red;
      }
  }
  .dialog{
    position: absolute;;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.7);
    width: 100%;
    height: 100%;
    .box{
        width: 100%;
        height: 70%;
        border-radius: pxTorem(20px) pxTorem(20px) 0 0;
        background: white;
        position: absolute;
        bottom: 0;
    }
  }
}
</style>


