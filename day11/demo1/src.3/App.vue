<template>
    <div id="app">
        <h3>{{grade}}</h3>
        <myUl></myUl>
    </div>
</template>
<script>
import myUl from './components/ul';

export default {
    data(){
        return {
            grade:'1611C'
        }
    },
    components:{
        myUl
    }
}
</script>