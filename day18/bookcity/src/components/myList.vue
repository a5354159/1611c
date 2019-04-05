<template>
    
        <dl>
            <dt>
                <img :src="imgs" alt="">
            </dt>
            <dd>
                <span>{{tits}}</span>
                <slot></slot>
            </dd>
        </dl>

</template>
<script>
export default {
    data(){
        return {
           
        }
    },
     props:['imgs','tits']
}
</script>
