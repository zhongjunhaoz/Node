const fs = require('fs');
const files = [];//收集文件的数组
//一步步 目录走下去
const walk = function(path){
    fs
        .readdirSync(path)//读取一个文件下的所有
        .forEach(file => {
            const newPath = path + '/' + file;
            const stat = fs.statSync(newPath);
            // console.log(stat);
            if(stat.isFile()){
                if(/\.js$/.test(file)){
                    file.push(file);
                }
            }else if(stat.isDirectory()){
                walk(newPath);
            }
            //要么是文件，
            // js文件 正则
            // 要么是目录，递归
            console.log(item);
        })
    
    // fs.readdir(path,function(err,items){
    //     console.log(items);
    // })
    // console.log('啦啦啦');
}

walk('./src');
console.log(files);//输出所有文件 