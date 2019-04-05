<template>
<div>
    <header>
        <slot name="header"></slot>
    </header>
    <section>
        <slot></slot>

    </section>
    <footer>
        <slot name="footer"></slot>
    </footer>

     <!-- <parent> 父组件里面
           <h1 slot="header">头部</h1>
           <p>内容</p>
           <p>内容1</p>
           <div slot="footer">底部</div>
       </parent> -->
</div>
    
</template>
