#### async
让异步操作变简单

##### 语法
async function name(){
    
}

let name = async function(){
    
}

##### 等待异步操作执行完成 返回异步操作成功执行的返回值
##### 关键字 await

async 函数返回一个promise对象，函数内部return 值会被该promise对象成功执行的函数接受
