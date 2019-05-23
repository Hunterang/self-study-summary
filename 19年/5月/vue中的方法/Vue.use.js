class Vue {
  static use(plugin) {
    var installPlugin = this._installPlugin
    if (installPlugin.indexOf(plugin) > -1) {
      return  this
    }
    var arg = [this]
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin,arg )
    }
    else if (typeof plugin === 'function') {
      plugin.apply(plugin,arg)
    }

    installPlugin.push(plugin)
    return this
  }
}
//原理如此，因为render怎么实现的还没有完全明白，暂时搁置，
//由上下两部分得知 Vue.ues(Vue-Router) === VueRouter.install(Vue)

let Vu
class Router {
  static install (_Vue) {
    Vu = _Vue

    
    Vu.mixin({
      beforeCreate() {
        if (this.options.router) {//vue实例创建之时，调用router的init方法
          this.options.router.init()
        }
      }
    })
    Vu.component('RouterLink' {
      render: h => {

      }
    })
    Vu.component('RouterView' {
      render: h => {

      }
    })
  }
  constructor() {
    this.app = Vu
    this.routerMap = {}
    this.router = {}
  }
  init () {
    this.bindEvent()
    this.initRouterMap()
  }
}
