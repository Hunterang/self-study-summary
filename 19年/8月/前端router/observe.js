class  Observe {
  constructor(opt) {
    this.opt = opt
    this.definepropty(this.opt)
  }
  definepropty(obj) {
    Object.keys(obj).forEach( v => {
      let dep = new Dep()
      let proxy = new Proxy(obj, {
        get(obj,v) {
          if (dep.target) {
            dep.add(dep.target)
          }
          Reflect.get(obj,v)
        },
        set(obj, v, value) {
          dep.notify()
          Reflect.set(obj, v, value)
        }
      })
    })
  }
}

class Dep {
  constructor() {
    this.depandents = []
  }
  add(target) {
    this.depandents.push(target)
  }
  notify(){
    this.depandents.forEach( target => target.update())
  }
}
