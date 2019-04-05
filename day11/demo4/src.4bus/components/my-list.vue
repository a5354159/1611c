<template>
    <div>
        <span>-</span>
        <span>{{num}}</span>
        <span @click="add">+</span>
    </div>
</template>
<script>
import Eventbus from '../js/eventbus';
export default {
    props:['num','id'],
    data(){
        return{

        }
    },
    methods: {
        add(){
            let num =this.num+1;
            console.log(num,this.id);
            Eventbus.$emit('addCount',num,this.id);
        }
    },
}
</script>