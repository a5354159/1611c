<template>
    <div id="app">
       <header>
         <span>列表</span>
         <span @click="flag = true">新增</span>
         <ul class="list" v-show="flag">
           <li v-for="(item,index) in list" :key="index" @click="addClick(index)">{{item.title}}</li>
         </ul>
       </header>
       <section>
         <table>
           <thead>
              <th>
             <td>类型</td>
             <td>号码</td>
             <td>提示内容</td>
             <td>操作</td>
           </th>
           </thead>
           <tbody>
              <my-list v-for="(item2,index) in checkList" :key="index"
              :title="item2.title"
              :phone="item2.phone"
              :content="item2.content"
              :index="index"
              @addChange="add"
              ></my-list>
           </tbody>
          
         </table>
       </section>
       <div class="iconbox">
         <Icon v-for="(item1,ind) in checkList" :key="ind"
          :icon="item1.icon"
          :cont="item1.content"
         ></Icon>
       </div>
    </div>
</template>
<script>
import myList from './components/my-list';
import Icon from './components/icon';
import axios from 'axios';
export default {
  data(){
    return {
      flag:false,
      list:[],
      checkList:[]
    }
  },
  mounted() {
    axios.get('/api/add').then((res)=>{
        this.list = res.data;
    });
  },
  components:{
    myList,
    Icon
  },
  methods: {
    addClick(ind){
      this.flag = false;
      let bool = this.checkList.findIndex(item => item.title == this.list[ind].title)
        if(bool == -1){
          this.checkList.push(this.list[ind]);
        }
    },
    add(val,ind){
      console.log(val,ind);
      this.checkList[ind].content = val;
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import './scss/common.scss';
@import './scss/_mixin.scss';
#app{
  width: 100%;

}
  header{
    height: pxTorem(44px);
    width: 80%;
    margin: 0 auto;
    background: lavenderblush;
    @include box_flex;
    @include justify(space-between);
    @include align;
    font-size: pxTorem(16px);
    padding: 0 pxTorem(60px);
    @include sizing;
    >ul{
      position: absolute;
      right: pxTorem(180px);
      top: pxTorem(44px);
      li{
        height: pxTorem(36px);
        line-height: pxTorem(36px);
        text-align: center;
      }
    }
  }
  section{
    font-size: pxTorem(16px);
    width: 80%;
    margin: 0 auto;
    >table{
      width: 100%;
      >thead{
        width: 100%;
        >th{
          width: 100%;
          @include box_flex;
          >td{
            @include flex;
          }
        }

      }
      >tbody{
        width: 100%;
        >tr{
          width: 100%;
          @include box_flex;
          >td{
            @include flex;
            text-align: center;
            input{
          height: 30px;
          border: 1px solid #ccc;
        }
          }
        }
        
      }
    }
  }
  .iconbox{
    position: fixed;
    right: 10px;
    bottom: 10px;
    width: 50px;
  }
</style>


