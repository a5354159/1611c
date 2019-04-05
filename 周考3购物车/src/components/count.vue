<template>
    <div class="countlist">
        <div v-show="num">
            <span @click="del">-</span>
            <span>{{num}}</span>
        </div>
        <span @click="add">+</span>
    </div>
</template>
<script>
export default {
    props:['num','id','type'],
    data(){
        return {

        }
    },
    methods: {
        add(){
            let num = this.num +1;
            this.$bus.$emit('addCount',num,this.id,this.type);
        },
        del(){
            let num = this.num -1;
            this.$bus.$emit('addCount',num,this.id,this.type);
        }
    },
}
</script>
<style>
.countlist{
    display: flex;
}
</style>

