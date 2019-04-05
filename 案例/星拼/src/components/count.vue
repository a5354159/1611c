<template>
    <div class="btns">
        <div class="reduce" v-if="open">
            <button @click="reduce">-</button>
            <span>{{count}}</span>
        </div>
        <button class="next" @click="addCar">+</button>
    </div>
</template>
<script>
export default {
    props:['title','price','id','img'],
    data(){
        return {
            count:0,
            open:false
        }
    },
    methods:{
        addCar(){
            this.count++;
            this.open=true;
            this.sendData();
        },
        reduce(){
            this.count--;
            this.open=this.count > 0;
            this.sendData();
        },
        sendData(){
            this.$bus.$emit('addJoin',{
                id:this.id,
                title:this.title,
                price:this.price,
                img:this.img,
                count:this.count
            })
        }
    }
}
</script>
<style lang="scss">
.btns{
    position: absolute;
    // right:10px;
    // bottom:20px;
    display: flex;
    width: 200px;
    height:40px;
    button{
        display: inline-block;
        width: 30px;
        height: 30px;
        font-size:32px;
        line-height: 30px;
        text-align: center;
    }
    .next{
        margin-left:100px;
        margin-top:-40px;
    }
    .reduce{
        display: inline-block;
    }
}
</style>
