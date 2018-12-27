var pt = window.performance.timing;//检测网页运行时间的简单测试
 var reques = pt.responseEnd - pt.requestStart//请求开始到结束的时间
 var oload = new Date().getTime() - pt.navigationStart;//进入页面到执行该条语句的时间，基本属于整体页面完成时间
 console.log(reques/1000,oload/1000);
