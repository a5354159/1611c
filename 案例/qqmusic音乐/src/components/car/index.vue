<template>
    <div class="wrapper">
        <h3>今天是：{{week}}</h3>
        <change-week  @showWeek="updateWeek" :week="week"></change-week>
    </div>
</template>
<script>
    import ChangeWeek from "./includes/child.vue"
    export default {
        name:"app",
        data(){
            return{
                week:"星期二"
            }
        },
        components:{
            changeWeek:ChangeWeek
        },
        components:{
            changeWeek:ChangeWeek
        },
        methods:{
            updateWeek(data){
                this.week=data
            }
        }
    }
</script>