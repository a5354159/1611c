<template>
    <div>
         {{title}}<span>下雨了</span>{{count}}
        <button @click="$emit('addCount',count)" >点击</button>
        <img :src="item" alt="" v-for="(item,index) in imgs" :style="styles" :key="index">
    </div>
</template>
<script>
export default {
    // props:['title','count','imgs','styles'],
    props:{
        title:{
            type:String,
            default:'1611C',
            required: true
        },
        count:{
            type:Number,
            validator(val){
                return val >10;
            }
        },
        imgs:{
            type:Array,
            default(){
                return ['http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg', 'http://pic29.nipic.com/20130601/12122227_123051482000_2.jpg', 'http://uploads.oh100.com/allimg/1709/117-1FZ5102542-52.jpg']
            }
        },
        styles:Object
    },
     data() {
            return {
              
            }
        }
}
</script>

<style scoped>
  
</style>


