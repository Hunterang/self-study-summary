class Router {
  constructor(opt) {
    this.init(opt)
    this.current = {
      path: '/',
      component: '<div> this is first page </div>',
      query: {}
    }
    this.routers = []
  }
  init(opt) {
    if(opt.routers.length) {
      this.current = object.assign({}, this.current, opt.routers[0])
      this.routers = opt.routers
      this.el = opt.el
    }
    if(opt.history) {
      this.listenHistoy()

    }else {
      this.listenHash()

    }
    this.reactive(this)//代理自己，监听是不是current
  }
  listenHistoy() {
    this.push = this.pushstate
    window.addEventListener('pushtate', (e) => {
      e.preventDefault()
      let path = location.pathname
      this.updateCurrentProxy(path)
    })
  }
  listenHash() {
    this.push = this.pushHash
    window.addEventListener('hashchange', (e) => {
      e.preventDefault()
      let hash = location.hash
      this.updateCurrentProxy(hash)
    })
  }
  updateCurrentProxy(path) {
    this.proxy.current = this.router.fliter(router => router.path == path)[0] || this.router.fliter(router => router.path == '*')[0]

  }
  reactive(obj) {
    return new Proxy(obj, {
      get(obj, key) {
        return obj[key]
      },
      set(obj, key, value) {
        if(!obj[key] == value) {
          obj[key] = value
          if(key == 'current') {
            //本来应该添加一个观察者的但是不写了
            this.el.innerHTML = value.component
          }
        }
      }
    })
  }
  pushHash(opt) {
    updateProxy('hash', opt)
  }
  pushstate(opt) {
    updateProxy('state', opt)
  }
}
