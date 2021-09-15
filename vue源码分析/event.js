export function initEvents(vm) {
    vm._events = Object.create(null)
    vm._hasHookEvent = false
    const listeners = vm.$options._parentListeners
    if (listeners) {
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
    } 
}
