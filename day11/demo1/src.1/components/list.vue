<template>
    <div>
         {{title}}<span>下雨了</span>{{count}}
        <button @click="count++" >点击</button>
        <img :src="item" alt="" v-for="(item,index) in imgs" :style="style" :key="index">
    </div>
</template>
<script>
export default {
     data() {
            return {
                title: '周一',
                count: 1,
                style: {
                    height: '100px',
                    width: '100px',
                    display: 'inline-block'
                },
                imgs: ['http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg', 'http://pic29.nipic.com/20130601/12122227_123051482000_2.jpg', 'http://uploads.oh100.com/allimg/1709/117-1FZ5102542-52.jpg']
            }
        }
}
</script>

<style scoped>
    div{
        height: 200px;
        width: 300px;
        background: red;
    }
</style>


