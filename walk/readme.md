- readdir 
    读目录里面的内容 IO操作异步
    readdirSync 调用这个API时，可以同步。
    Async 异步  ，sync同步

JS是单线程 ，用回调或promise，释放主线程的控制权，主要是因为js是前端DOM的编程，用户交互比较多。
等到执行完后，再通过event-loop机制，拿回控制权（callback,resolve）,js获取了服务器的能力，(node就是服务端编程，与PHP竞争)，
readdirSync() 