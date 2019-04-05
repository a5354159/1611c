<template>
    <div class="choose-wrap">
        <choose-item v-if="i<3" 
        v-for="(item,i) in cotagoryList" 
        :key="i" 
        :obj="item"
        @choose = 'choose'
        ></choose-item>
    </div>
</template>

<script>
import chooseItem from '../components/chooseItem'
export default {
    components:{
        chooseItem
    },
    data(){
        return {
            cotagoryList:[],
            chooseObj:{}
        }
    },
    created(){
        this.$http.get('/api/catagory').then(res => {
            if(res.data.code === 1){
                this.cotagoryList = res.data.data
            }
        })
    },
    methods:{
        choose(subject,label){
            this.$set(this.chooseObj,subject,label);
            localStorage.setItem('chooseObj',JSON.stringify(this.chooseObj));
        }
    }
}
</script>

<style>
    .choose-wrap{
        width:100%;
        height: 100%;
        overflow: scroll;
    }
</style>

