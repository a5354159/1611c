<template>
    <div class="box">
        <ul>
            <li v-for="(item,index) in arr" :key="index" @click="$emit('add',tao)">
                <my-sapn :itsm='item.tit'></my-sapn>
            </li>
        </ul>
    </div>
</template>
<script>
import mySapn from './eld.vue';
export default {
    props:['arr'],
    data(){
        return {
            tao:{
                b:456
            }
        }
    },
    components:{
        mySapn
    }
}
</script>
