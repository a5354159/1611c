<template>
  <div :class="['hello',{'boder':items.Layout==='border'}]">
      <h6>{{items.Subject}}</h6>
      <div>
        <dl v-for="(item,index) in items.Content" :key="index">
       <dt>
         <img :src="item.Icon" alt="">
       </dt>
       <dd>
         {{item.Label}}
       </dd>
     </dl>
     </div>
     
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:{
    items:{
      type:Object
    }
  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .hello{
    h6{
      font-size: 15px;
      width: 100%;
      height: 44px;
      line-height: 44px;
      border-bottom:1px solid #ccc; 
    }
    >div{
      padding: 0 15px;
      box-sizing: border-box;
      display: flex;
      flex-wrap:wrap; 
      dl{
        flex: 1;
        font-size: 16px;
        dt{
          // width: 27%;
          width: 80px;
          img{
            width: 100%;
            
          }
        }
        dd{
            text-align: center;
        }
      }
    }
     
  }
 .border{

 }
</style>
