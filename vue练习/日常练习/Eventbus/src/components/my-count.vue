<template>
    <div>
        <span @click="del">-</span>
        <span>{{sum}}</span>
        <span @click="add">+</span>
    </div>
</template>

<script>
export default {
props:['sum','id'],
// created(){
//     console.log(this.sum)
//     console.log(this.id)
// },
methods:{
    add(){
        let num = this.sum+1;
        this.$bus.$emit('addCont',num,this.id)
    },
    del(){
        let num = this.sum-1;
        this.$bus.$emit('delCont',num,this.id)
    }
}
}

</script>

<style>

</style>
