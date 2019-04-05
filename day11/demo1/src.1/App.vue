<template>
    <div id="app">
        <h3>{{grade}}</h3>
        <list></list>
        <list></list>
        <list></list>
        <list></list>
        <list></list>
        <list></list>
    </div>
</template>

<script>
import list from './components/list';
export default {
    data(){
        return{
            grade:'1611C'
        }
    },
    components:{
        list
    }
}
</script>



