<template>
    <div class="big">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
    };
</script>
<style scope>
    * {
        margin: 0;
        padding: 0
    }
    
    .big,
    html,
    body {
        width: 100%;
        height: 100%;
    }
</style>