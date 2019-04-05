<template>
    <div class="box">
        <ul>
            <li v-for="(item,index) in helist" :key='index'>
                <i :class="{'active':index==ind}"></i>
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['helist','ind']
}
</script>
