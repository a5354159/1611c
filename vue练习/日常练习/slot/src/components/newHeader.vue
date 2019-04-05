<template>
    <header>
        <span>&lt;</span>
        <slot :list=list name="default"></slot>
        <div>
            <slot name="span"></slot>
        </div>
        <span>.....</span>
    </header>
</template>
<script>
export default {
    data(){
        return{
            list:[{
               title:'查看'     
            },
            {
               title:'详情'     
            },
            {
               title:'删除'     
            }]
        }
    }
}
</script>
