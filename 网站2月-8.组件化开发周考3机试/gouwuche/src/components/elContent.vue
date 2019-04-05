<template>
    <div class="jia">
        <div v-show="isShow">
            <span @click="buyCar('reduce')">-</span>
            <span>{{num}}</span>
        </div>
        <span @click="buyCar('add')">+</span>
    </div>
</template>
<script>
export default {
    props:['num','id'],
    computed:{
        isShow(){
            return this.num > 0
        }
    },
    methods:{
        buyCar(type){
            this.$bus.$emit('buyCar',this.id,type)
        }
    }
}
</script>
<style lang="scss">
 
</style>