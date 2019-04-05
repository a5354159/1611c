<template>
    <div class="dialog">
        <div class="dialogContent">
             <button>清空</button>
                <ul>
                    <li v-for="(item,index) in buyList" :key="index">
                        <span>{{item.title}}</span>
                        <span>{{item.price}}</span>
                        <count :num="item.num" :id="item.id" :type="item.type"></count>
                    </li>
                </ul>
        </div>
       
    </div>
</template>
<script>
import count from './count';
export default {
    props:['buyList'],
    data(){
        return {

        }
    },
    components:{
        count
    }
}
</script>

<style>
.dialog{
    height: 94%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 0;
    bottom: 50px;

}
.dialogContent{
    height: 200px;
    width: 100%;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99;
    overflow-y: auto;
}

</style>
