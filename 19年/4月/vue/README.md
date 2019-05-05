vue 作为一款非常优秀的框架（个人感觉），有着它令人喜欢的地方，也有一些需要注意的地方。


刷新问题：内存释放，导致有些页面显示跟实际有出入，解决办法，就是把内存中的数据保存到浏览器中，当getters数据时候，如果内存没有则在本地中查询使用，当commit的时候把数据覆盖本地一份。

2.this.$nextTick( ()=> {} ),在所有dom渲染/刷新完毕之后执行该方法
  使用情况，操作dom改变数据，绘制canvas等等

3.slot插槽是构建组件的利器、、匿名插槽、具名插槽
  当父级传入的数据比较多的时候，用匿名插槽，如果传入的是固定的使用具名插槽

4.父子传值。props单项数据流绑定，所以不能作为v-model的双向绑定，但是如果传入的是object那么属于对数据的引用，经过computed属性计算，可以双向绑定

5.computed 属性为了达到双向绑定的效果，需要添加set跟get方法（优势在于当获取来源发生变化时候，computed会自动监听将页面从新渲染，但是如果是点击修改的话需要添加之前说的方法）

6.filters方法，对数据进行处理，可以绑定全局的，也可以绑定局部的，Vue.filter() 全局 filters: {}局部

7.vue.use(router)  == vue.prototype.$router

8.history问题，去除# 似的页面的地址栏看起来更像是常规地址，但是需要后天设置服务器，这样刷新不会出现404的情况。

9.vue-router 原理是改变hash匹配相应的路由/加载相应的代码onhashchange方法进行

function hashchange() {
  if ('onhashchange' in  window) {
    var hash = loaction.hash
    switch(hash) {
      case '/abs':
      ********
      case '/lolo':
      ******
      default :
      ********

    }
  }
}
****************************************************************
10.router-gurder导航守卫
//分为全局守卫和局部守卫
1.全局守卫router.before((to,from,next) => {
  to --> 将要进入的路由
  from --> 来自哪个路由 //检查路由中的yuan信息 查看是否需要登录才能进入
  //记得加next()
  })
2.局部守卫beforeRouterEnter(to,from,next => {
  根据parmas获取数据成功后进入下个路由调用next()
  })
  path: '* " 匹配所有路由返回404页面
  path: 'user-* ' 匹配所有user-开头的页面

  redirect：{name: 'abv'} || './b' to => {
    返回相应的路由
  }




  import Home frome '@/components/home.vue'
  {
    path: '/home/:id',
    name: '/home',
    meta: { requiresAuth: true }

    component: Home
  }
