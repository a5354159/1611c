#### 方法

1、v-for  遍历  

eg:v-for="(val,index) in list"

2、v-if  v-else  v-else-if 控制元素是否插入

3、v-show  控制元素显示隐藏

4、v-html 跟{{}}一样 控制元素的innerHTML

5、v-text 原样输出 html标签

6、v-bind 简写 : 标签的属性

7、v-on 简写 @  给标签绑定事件

8、v-model 双向绑定，主要针对表单元素

#### 组件传值

1、props 父=>子

2、自定义事件  子=>父

3、global event bus 兄弟或者跨级组件

4、$parent , $children , $root

5、