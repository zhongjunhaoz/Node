
// fs模块是后端开发node的一部分，相当于前端的DOM
const fs = require('fs');
// 读取文件是异步的
fs.readFile('./a.txt','utf8',function(err,data){
    // console.log(data);
    fs.readFile('./b.txt','utf8',function(err,data){
        if(err){
            console.log(err);
        }
        console.log(err,'------------------------------');
    })
})


// 将callback处理异步的方案抛弃
const fileAPromise = new Promise((resolve,reject)=>{
    // 花时间的诺言 耗时任务
    fs.readFile('./a.txt','utf8',(err,data)={
        // 流程的控权怎么移交
        resolve(data);
    });
});
const fileAPromise = new Promise((resolve,reject)=>{
    fs.readFile('./b.txt','utf8',(err,data)=>{
        if(err){
            reject(err)
        } else {
            resolve(data);
        }
    })
})
// 将内部的耗时内务运行起来
fileAPromise
    .then(data =>{
        console.log(data);
        return fileBPromise;
    })
    .then(data =>{
        console.log(data);
    })