- MVVN  前端新贵
Model 数据 page({data:{
    legends:[]
}})
view 视图
wxml
VN {{}} wx:for.....

- MVC 经典的web开发模式
model => SQL
view  =>静态页面
controller =>路由


- webServer 软件程序
web服务器硬件运行webserver程序的
IP http协议 
http：//127.0.0.1:3000 
端口 不只一个服务
3306 MYSQL 
80 Web服务
http
    .creatServer(function(request,response){
        response.end('hello world');
    })
    .creatServer()
    .listen(3000)


request 用户 N  web server 一直在端口3000端口上伺服
request 就能找到店 每位用户到达 触发事件，调用createServer 回调函数 ，request 用户身份，response?
响应请求 http 响应后就断开