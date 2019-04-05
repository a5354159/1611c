<template>
    <div>
        <span @click="del">-</span>
        <span>{{num}}</span>
        <span @click="add">+</span>
    </div>
</template>
<script>
import EventBus from '../js/eventbus';
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
        add(){
            let num = this.num +1;
            EventBus.$emit('addCount',num,this.id);
        },
        del(){
            let num = this.num-1;
            EventBus.$emit('addCount',num,this.id);
        }
    },
}
</script>
