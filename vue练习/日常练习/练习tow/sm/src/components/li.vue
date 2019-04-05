<template>
    <li>
            <h2>{{cont}}</h2>
        <div>
            <span>姓名:{{grad}}</span>
            <span>性别:{{sex}}</span>
            <button type="button" @click="$emit('addrt',cont)">点击</button>
        </div>
        <div>
            <img :src="item" alt="" v-for="(item,index) in imgs" :key='index' :style='styles'>
        </div>
    </li>
</template>
<script>
export default {
    props:{
        grad:{
            type:String,
            default:'郑豪',
            required:true
        },
        sex:{
            type:String,
            default:'男',
            required:true
        }
        ,imgs:{
            type:Array,
            default:[11,12,13],
            required:true
        }
        ,styles:{
            type:Object
        }
        ,cont:{
            type:Number,
            validator(value){
                return value>0
            }
        }
       
    }
}
</script>
