<template>
    <button @click='set(id)' ref='add'>{{cmp?'已在书架':'加入书架'}}</button>
</template>
<script>
export default {
    props:['id','cmp'],

   
    components:{

    },
    data(){
        return {
            list:[]
        }
    },
    methods:{
        set(){
            console.log(this.cmp)
            this.$bus.$emit('sole',this.id,this.cmp)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
button{
    border: 1px solid #000000;
    background:#fff;
    color: #000000;
}
</style>