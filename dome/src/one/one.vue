<template>
    <div>
        <tow :ages="age" @addclick="add"></tow>
        

    </div>
</template>
<script>
import tow from "./tow"
export default {
    data(){
        return{
            name:"波仔",
            age:24
        }
    },
    components:{
        tow
    },
    methods:{
        add(val){
            this.age++
        }
    }
}
</script>

