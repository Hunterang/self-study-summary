import { callHook } from "../lifecycle"


let uid = 0
class Dep {
    static target
    constructor() {
        this.id = uid++
        this.subs = []
    }
    addSub(sub) {
        this.sup.push(sub)
    }
    removeSub(sub) {
        this.subs = this.subs.filter(v => v !== sub)
    }
    depend() {
        if(Dep.target) {
            Dep.target.addDep(this)
        }
    }
    notify() {
        const subs = this.subs.slice()

        subs.forEach(v => {
            v.update()
        })
    }
}
Dep.target = null

const targetStack = []

export function pushTarget (target) {
  targetStack.push(target)
  Dep.target = target
}

export function popTarget () {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}
//每次编译到{{}}插值表达式的时候进行如下操作，
// new watcher  -> Dep.target = wather -> 触发 objet.get
// 发现 Dep.target -> dep.depand() 
// watcher的实例 addDep 将本身push到dep.subs中




export class Observer {
    constructor(value) {
        this.value = value
        this.dep = new Dep()
        this.vmCount = 0
        if(Array.isArray(value)) {


            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }
    walk(obj) {
        const keys =Object.keys(obj)

        for(let i = 0; i < keys.length; i++) {
            defineReactive(obj, key[i])
        }
    }

    observeArray(items) {
        items.forEach(v => {
            observe(v)
        })
    }
}




export function observe(value) {
    if(typeof value !== 'object' || value instanceof VNode) {
        return
    }

    let ob = new Observer(value)

    return ob
}



export default function defineReactive(object, key, val, c, s) {
    const dep = new Dep()

    const property  = Object.getOwnPropertyDescriptor(object, key)
    if(property && property.configurable === false) return

    const getter = property && property.get
    const setter = property && property.set

    if((!getter || setter) && arguments.length === 2) {
        val = object[key]
    }

    let child = !s && observe(val)  //递归之间做了一层缓冲

    Object.defineProperty(object, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            const value = getter ? getter.call(object) : val
            if(Dep.target) {
                dep.depend()
                if(child) {
                    child.dep.depend()
                    if(Array.isArray(value)) {
                        dependArray(value)
                    }
                }
            }
            return value
        },
        set: function(newValue) {
            const value = getter ? getter.call(object) : val
            if(newValue === value) {
                return
            }
            if (getter && !setter) return
            if(setter) {
                setter.call(object, newValue) 
            } else {
                val = newVal
            }
            childOb = !shallow && observe(newVal) //数据更新了新的子项需要被双向绑定
            dep.notify()
        }
    })

}

const qunern = []

class Watcher {
    constructor(vm, exp, cb, options, isRenderWatcher) {
        this.vm = vm
        if(isRenderWatcher) {
            vm._watcher = this 
        }
        vm._watchers.push(this)

        if(options) {

        } else {
            this.deep = false
        }

        this.cb = cb
        this.id = ++uid

        this.deps = []
        this.newDeps = []
        this.depIds = new Set()
        this.newDepIds = new Set()

        this.expression = exp


        if (typeof expOrFn === 'function') {
            this.getter = expOrFn
          } else {
            this.getter = parsint(expOrFn) ? {} : undefined
          }


        this.value = this.lazy
        ? undefined
        : this.get()
    } 

    get() {

        targetStack.push(this)
        Dep.target = this
        let value
        const vm = this.vm

        try {
            value = this.getter.call(vm, vm)
        } finally {
            targetStack.pop() 
            Dep.target = targetStack[targetStack.length - 1]
        }

    }

    addDep(dep) {
        const id = dep.id
        if (!this.newDepIds.has(id)) {//收集过就不收集了
        this.newDepIds.add(id)
        this.newDeps.push(dep)
        if (!this.depIds.has(id)) {
            dep.addSub(this)
        }
        }
    }

    update() {
        // queueWatcher(this)
        if(!qunern.includes(this)) {
            qunern.push(this)
        }

        this.vm.$nextTick(() => {
            qunern.forEach(v => {
                v.run()
            })
        })

        callHook('updated')
    }

    run () {
        const value = this.get() // 数据更新触发set函数 notity.update()

        const oldValue = this.value  //初始化的数据
        this.value = value //更新之后的数据

        this.cb.call(this.vm, value, oldValue)

    }
}
