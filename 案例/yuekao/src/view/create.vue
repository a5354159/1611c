<template>
    <div class="wrap">
        <g-Item></g-Item>
        <router-link to="/createForm" tag="div" class="btn">+创建投票</router-link>
        <div class="con">
            <span class="gray">我创建过的投票</span>
            <ul class="vote-list">
                <li>
                    <h4>把决定权交给各位群众</h4>
                    <span class="timer">创建于2018-12-11</span>
                    <span>...</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script> 
import gItem from '../components/gItem'
export default {
    components:{
        gItem
    },
}
</script>
<style lang="scss">
    
    .gray{
        color:gray;
        font-size:12px;
        margin-left:15px;
    }
    .vote-list{
        font-size:14px;
        h4{
            font-size:16px;
        }
        li{
            margin:15px;
            height:60px;
            background: #fff;
            box-shadow: 0 0 3px #999;
            margin-top:10px;
        }     
    }
</style>

