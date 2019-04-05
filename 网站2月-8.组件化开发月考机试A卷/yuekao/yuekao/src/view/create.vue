<template>
    <div class="wrap">
        <g-Item></g-Item>
        <router-link to="/createForm" tag="div" class="btn"><span>+</span>创建投票</router-link>
        <div class="con">
            <span class="gray">我创建过的投票</span>
            <ul class="vote-list">
                <li>
                    <h4>把决定权交给各位群众</h4>
                    <span class="timer">创建于2018-12-11</span>
                    <span>...</span>
                </li>
            </ul>
            <div class="box">
                <h3>
                    <p>考试题</p>
                    <p>创建于2018.11.1 16:26</p>
                </h3>
            </div>
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
        height:50px;
        font-size:14px;
        h4{
            font-size:16px;
            line-height: 30px;
            margin-left: 10px;
        }
        li{
            margin:15px;
            height:60px;
            background: #fff;
            box-shadow: 0 0 3px #999;
            span{
                margin-left: 10px;
            }
        }     
    }
   .box{
        margin:15px;
        height:60px;
        box-shadow: 0 0 3px #999;
        background: #fff;
        line-height: 30px;
        
        p:nth-child(2){
           color:gray;
           font-size: 12px;
           margin-left: 10px;
       }
        p:nth-child(1){
           font-size: 16px;
           margin-left: 10px;
       }
   }
</style>

