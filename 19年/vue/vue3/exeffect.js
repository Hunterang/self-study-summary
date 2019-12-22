//According to the way of use Vue3, i now write a funciton of the Effect API.

const activeReactiveEffectStack = []
let tagetsMap = new WeakMap()
//effect执行触发fn执行，为了保证传入的fn不出bug，采用了李代桃僵的方法
//fn中包含了劫持的数据，触发了get方法，此时track开始收集依赖
//依赖收集完成之后，再次将任务列表清空
function effect(fn) {
  const rxEffect = function(...args) {
    activeReactiveEffectStack.push(rxEffect)
    try {
      return fn(...args)
    } finally {
      activeReactiveEffectStack.pop(rxEffect)
    }
  }
  rxEffect()
}

function track(target, key) {
  //fn中可能包含了新的effect？
  //一个依赖，可以收集多个key
  const effect = activeReactiveEffectStack[activeReactiveEffectStack.length - 1]
  if (effect) {
    let desMap = targetsMap.get(target)
    if (!desMap) {
      //首次访问target
      desMap = new Map()
      desMap.set(key, target)
    }else {
      if (!desMap.get(key)) {
        desMap.set(key, target)
      }
    }
  }
}


function reactive(target) {
  //判断target时候已经代理如果代理就返回
  let proxyObject = new Proxy(target, handle)

  const handle = {
    get(target, key, ref) {
      track(target, key)
      return Reflect.get(target, key)
    },
    set(target, key, value, ref) {
      if (value === target[key]) return
      Reflect.set(target, key, value)
      dep.notify(target, key)
    }
  }
}
