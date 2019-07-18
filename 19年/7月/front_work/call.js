Function.prototype.myCall = function (cxt) {
  cxt = cxt? cxt || window
  let fn = Symbol()
  cxt.fn = this
  let arg = [...arguments].slice(1)
  cxt.fn(...arg)
  delete cxt.fn
}
function test() {

}
test.myCall(this)
//原生call实现，就是将this，执行的方法作为上下文的参数再执行，相当于调用者
function format(o) {
  let arr = Array(12).fill(null)
  Object.keys(o).forEach( k =>  arr[k-1] = o[k]  )
  return arr
}
format({1:222, 2:123, 5:888})


function LazyMan(str) {
  if (this.constructor !== LazyMan) {
    return new LazyMan(str)
  }
  this.willDoThing= []
  this.firstDoing = []
  this.firstSleep =   false
  this._init(str)
}
LazyMan.prototype._init = function(str) {
  console.log(`Hi I am ${str}`);
  Promise.resolve().then(_ => {
    this.startDoing()
  })
  return this
}
LazyMan.prototype.startDoing = async function() {
  if (this.firstSleep) {
    await this.firstDoing[0]()
    this.willDoThing.forEach( async (v) => {await v()} )
  }else {
    this.willDoThing.forEach( async (v) => {await v()} )
  }
}

LazyMan.prototype.sleepFirst =  function(time) {
  this.firstSleep = true
  this.firstDoing.push(async() => {
    await sleep(time)
    console.log('first sleep'+time);
  })
  return this
}


LazyMan.prototype.sleep = function(time) {
  this.willDoThing.push(async() => {
    await sleep(time)
    console.log('sleep'+time);
  })
  return this
}


 function sleep(time) {
  return new Promise((a,b) => {
    setTimeout(()=>  a()  ,time)
  })
}
LazyMan('zz').sleep(1000).sleepFirst(2000)
