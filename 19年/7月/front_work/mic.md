# 什么是宏任务 什么是微任务
- 在浏览器中的微任务一般指的就是promise相关的，但是微任务怎么生成的确实不知道，generator函数？
- 宏任务 i/o settimeout requestanimationframe ajax

浏览器事件循环机制，event loops
-- 执行宏任务 -- 执行完成查看是否有微任务 --有就执行（一次循环）--- 执行宏任务 -------
- 一次事件中 包括主线任务中的宏任务 以及微任务

- settimeout 执行之后浏览器会将他当做异步处理 将任务放入eventtable中，当经过ms时间之后进入eventquene中，如果主线任务为空，进入主线开始执行ps: 主线完成包括微任务的完成这才叫做空

- 其他道理一样

settimeout中的时间，只是代表了从eventtable进入enventquene中的时间，如果主线还在被占用中，那么只能继续等待
<a> node 环境跟浏览器 存在差异</a>
