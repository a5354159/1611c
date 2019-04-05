<template>
    <div>
        <span @click="del">-</span>
        <span>{{num}}</span>
        <span @click="add">+</span>
    </div>
</template>
<script>
// import EventBus from '../js/eventbus';
export default {
    props:['num','id'],
    data(){
        return {

        }
    },
    created() {
        console.log(this);
    },
    methods: {
        add(){ //点击加号
            let num = this.num+1;
            this.$bus.$emit('addCount',num,this.id);
        },
        del(){ //点击减号
            let num = this.num-1;
            this.$bus.$emit('addCount',num,this.id);
        }
    },
}
</script>
