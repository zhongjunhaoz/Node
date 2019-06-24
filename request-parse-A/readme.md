#通用首部

# 响应头
Content-Type:告诉浏览器 返回的东西到底是什么类型
类型： text/plain text/html ... image/jpg mime 

## 请求头
content-Type 告诉后台 发送数据的格式
POST请求格式1： application/x-www-form-urlencode 
form 默认编码
post 请求格式2 : applcation/json json 交换数据

区别：
表单编码格式
json

- 获取
    req.headers['content-type']

- 获取请求方式
    req.methods
- url
    req.url

## git 请求
？query =''&type=''&a=''
1 url.parse() query 
2 queryString

## createServer 80 
http 服务默认 80 listen 指定另外的一个端口