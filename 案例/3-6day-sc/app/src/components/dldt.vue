<template>
    <dl>
        <dt>
            <img :src="avatar" alt="">
        </dt>
        <dd>
            <p><span>{{title}}</span><span>{{tip_welth_sum}}月票</span></p>
            <p><span></span></p>
            <p>{{summary}}</p>
            <p>{{author}} <button @click='$router.push({name:"add",params:{id:id}})'>书籍详情</button><buttons
            :id=id
            :cmp=cmp
            ></buttons></p>
        </dd>
    </dl>
</template>
<script>
 import buttons from './button'
export default {
    props:['title','avatar','id','summary','tags','tip_welth_sum','author','author','cmp'],
    components:{
        buttons
    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
    
     
    },
    created(){
    },
    mounted(){

    }
}
</script>
<style lang="scss">
</style>