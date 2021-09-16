export function initEvents(vm) {
    vm._events = Object.create(null)
    vm._hasHookEvent = false //初始化的时候证明这个是没有的
    const listeners = vm.$options._parentListeners
    if (listeners) { //证明传递的是个component   || 此处不予深入
        updateComponentListeners(vm, listeners) 
    }
}

export function updateComponentListeners(vm, listeners) {

}


export function eventsMixin(Vue) {
    const hookRE = /^hook:/
    Vue.prototype.$on = function (event , fn) {
        let vm = this
        if(Array.isArray(event) ) {
            event.map(e => vm.$on(e, fn))
        } else {
            (vm._events[event] || (vm._events[event] = [])).push(fn)

            if (hookRE.test(event)) {
               vm._hasHookEvent = true
               //callhook的时候会判断vm._hasHookEvent 如果为true，就会触发钩子
               // 例子 this.$on('hook:smeil')
            }
        }
        return vm
    } 

    Vue.prototype.$once = function(event, fn) {
        const vm = this

        function on () {
            vm.$off(event, fn)
            fn.call(vm, arguments)
        }    

        // vm._events[event] = on
        on.fn = fn
        vm.$on(event, on)
        return vm
    }

    Vue.prototype.$off = function(event, fn) { 
        const vm = this

        if(!arguments.length) {
            vm._events = Object.create(null)
            return vm
        }

        if(Array.isArray(event)) {
            for(let i = 0, l = event.length; i < l; i++) {
                let e = event[i]
                delete vm._events[e]  //简化处理全部删除
            }
            return vm
        }

        const cbs = vm._events[event]
        if (!cbs) {
           return vm
        }
        if (!fn) {
            vm._events[event] = null
            return vm
        }
    }

    Vue.prototype.$emit = function (event,...args) {
        const vm = this
        let cbs = vm._events[event]
        for (let i = 0, l = cbs.length; i < l; i++) {
            cbs[i].call(vm,...args)
         }

    }
}
