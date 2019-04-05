<template>
    <div id="app">
        <my-header></my-header>
        <my-footer></my-footer>
    </div>
</template>
<script>
import myHeader from './components/my-header';
import myFooter from './components/my-footer';
export default {
    data(){
        return {
            grade:'1611C'
        }
    },
    components:{
        myHeader,
        myFooter
    }
}
</script>

<style>
    @import './scss/common.scss';
    @import './scss/_mixin.scss';

</style>
