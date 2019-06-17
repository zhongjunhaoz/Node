{/* <Script src="./http"></Script> */}
// require 关键字 就是引入一个模块，
const http = require('http');
let i = 0;
http
    .createServer(function(request,response){
        response.end('Hello World!${++i}');
    })
    .listen(3000);
