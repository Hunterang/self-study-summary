let handle = {
  get: function(target, name) {
    return name in target? target[name]: 37
  }
}

let p = new Proxy({}, handle)
//此时p是一个 proxy对象，所有new proxy 生成新对象
/*
proxy包含的第一个参数，可以是对象，数组，函数，代理
一个对象，它的属性是要执行的函数
*/

Proxy.revocable() //撤销一个代理


let targ = {}
let pro = new Proxy(targ,{})

pro.a = 37
console.log(targ.a); //37 操作被正确转发


let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('not an integer')
      }
      if (value > 200) {
        throw new RangeError('invalid')
      }
    }
    obj[prop] = value
  }
}

let person = new Proxy({},validator)


let object = {
  a: 'test'
}

handle.set(target, prop, value, receiver) Reflect.set(target, prop, value, receiver)//都是四个参数所以可以完美结合，不需要定义其中的方法

handle.get(target, prop, receiver) Reflect.get(target, prop, receiver)//receiver并不是必须，proxy中的receiver指代生成的实例，所以是this上下文

//其他Reflect.has() 'in'的作用  Reflect.construct() 'new'的作用 等等


//写法就是
let targe = {name: 'zzz'}
let proxy = new Proxy(targe,{
  get(target, prop, receiver){
    //对prop进行校验
    console.log('get');
    Reflect.get(target, prop)
  },
  set(target, prop, value) {
    //对props进行校验
    console.log('set');
    Reflect.set(target, prop, value)
  }
})


 let obj = {
   '1': 1,
   '2': 2,
   '3': 3,
   length: 3
 }
