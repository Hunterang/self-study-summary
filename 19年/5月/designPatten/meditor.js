//事实上写了一个观察者模式
let wtc = null
let obj = {
  name: 'by',
  age: 18
}
class dep {
  constructor() {
    this.watcher = {}
  }
  addWatcher(key,wat) {
    this.watcher[key] = this.watcher[key] || []
    if (!this.watcher[key].includes(wat)) {

      this.watcher[key].push(wat)
    }
  }
  notify(key,value){
    if (!this.watcher[key]) {
      return
    }
    this.watcher[key].forEach( f => f.update(value))
  }
}


function observer () {


  let dep = new dep()

  Object.keys(obj).forEach( k => {
    let value = obj[k]
      Object.defineProperty(obj,k,{
        get() {
          dep.addWatcher(k,wat)
          return value
        },
        set(nvalue) {
          value = nvalue
          dep.notify(k,nvalue)
        }
      })
  })
}
//不同于vue的写法是每当使用一次obj中的数据前一刻，生成一个watcher，并且将依赖的key保存，以便更新的时候作对比。
class watcher {
  constructor(key) {
    wtc = this
    obj[key]
    wtc = null
    this.key = key
  }
  update(k, value) {
    if (k === this.key) {
      //使用value
    }
  }
}
