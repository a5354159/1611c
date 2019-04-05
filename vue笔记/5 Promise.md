#### Promise
是异步编程的一种解决方案，比传统的解决方案--回调函数和事件--更合理和更强大。

new promise((resolve,reject)=>{

    //resolve  成功执行方法
    
    //reject   失败执行方法
    
})

#### 调用 resolve 和 reject
promise.prototype.then

PromiseObject.then(()=>{

    //resolve 要执行的函数
},()=>{

    //reject  要执行的函数
})

decodeURLComponent()  支持的编码格式多

decodeURL() 支持的编码格式少

##### 多个promise实例，包装成一个新的Promise实例
Promise.all([Promise1,promise2])

##### 捕捉异常 替代 .then第二个参数
Promise.prototype.catch()

##### 不管Promise 对象最后状态如何，都会执行的操作
Promise.prototype.finally()

##### all 方法用于将多个 Promise 实例，包装成一个新的Promise实例
Promise.prototype.race([promise1,promise2])

只要有一个成功会执行then