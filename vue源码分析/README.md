## Vue 源码搬运

 - 1、入口文件 index.js 将prototype属性全部混入
 - 2、index 文件初始化init，再init文件进行，初始化可以传入对象，或者components,options将会被vm.$options处理
      > 1 初始化 lifecycle \
      > 2 初始化 events \
      > 3 初始化 render \
      > 4 初始化callhook beforecreate 

##
>> 由于精力有限，源码部分暂时告一段落
