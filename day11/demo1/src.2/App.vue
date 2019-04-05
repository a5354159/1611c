<template>
    <div id="app">
        <h3>{{grade}}</h3>
        <list :title="title" :count="count" :styles="styles" @addCount="add"></list>
    </div>
</template>

<script>
import list from './components/list';
export default {
    data(){
        return{
            grade:'1611C',
              title: '周一',
                count: 19,
                styles: {
                    height: '100px',
                    width: '100px',
                    display: 'inline-block'
                },
                imgs: ['http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg', 'http://pic29.nipic.com/20130601/12122227_123051482000_2.jpg', 'http://uploads.oh100.com/allimg/1709/117-1FZ5102542-52.jpg']
        }
    },
    components:{
        list
    },
    methods: {
        add(count){
            console.log(count);
            this.count++;
        }
    },
}
</script>
<style scoped>
  div{
        /* height: 200px;
        width: 300px;
        background: red; */
    }
</style>



