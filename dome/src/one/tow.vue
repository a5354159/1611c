<template>
    <ul>
        <li>
            <p>名字:{{names}}</p>
            <p>年龄:{{ages}}</p>
        </li>
        <p></p>
        <button @click="$emit('addclick',ages)">点击</button>
    </ul>
    <!-- {{ages}} -->
</template>
<script>
export default {
    // props:["names","ages"],

    // props:{
    //     names:String,
    //     ages:Number
    // },

     props:{
        names:{
            type:String,
            default:"波波"
        },
        ages:{
            type:Number,
            validator(val){
                return val > 20
                // return val > 30
            }
        }
    },
    data(){
        return{

        }
    }

}
</script>

