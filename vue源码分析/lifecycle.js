export function initLifecycle (vm) { //查找父子关系，确定根节点
    const options = vm.$options //init时已经合并，两种方式，component || options

    let parent = options.parent
    if(parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {//一直找到不为abstract的父
            parent = parent.$parent
        }
        parent.$children.push(vm)
    }
    vm.$parent = parent //非abstract parent
    vm.$root = parent ? parent.$root : vm //始终指向根节点，第一次产生的

    vm.$children = [] //首次初始化一下
    vm.$refs = {}

    vm._watcher = null
    vm._inactive = null
    vm._directInactive = false
    vm._isMounted = false
    vm._isDestroyed = false
    vm._isBeingDestroyed = false
}




export function callHook (vm, hookNmae) {
    const handlers = vm.$options[hookNmae]

    if(handlers) {
        for (let i = 0, j = handlers.length; i < j; i++) {
            // invokeWithErrorHandling(handlers[i], vm, null, vm, info)
            let handle = handlers[i]
            handle.call(vm)  //让hook执行以下
          }

    }

    if (vm._hasHookEvent) {
        vm.$emit('hook:' + hook)
    }    
}

export function lifecycleMixin(Vue) {
    Vue.prototy._update = function(vnode, hydrating) {
        const vm = this
        const prevEl = vm.$el
        const prevVnode = vm._vnode

        vm._vnode = vnode
        // Vue.prototype.__patch__ is injected in entry points
        // based on the rendering backend used.
        if (!prevVnode) {
          // initial render
          vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)
        } else {
          // updates
          vm.$el = vm.__patch__(prevVnode, vnode)
        }

        if (prevEl) {
            prevEl.__vue__ = null
          }
    }
    Vue.prototy.$forceUpdate = function(vnode, hydrating) {

    }
    Vue.prototy.$destroy = function(vnode, hydrating) {

        const vm = this 
        if (vm._isBeingDestroyed) {
            //不允许连续触发
            return
        }    
        callHook(vm, 'beforeDestroy')
        vm._isBeingDestroyed = true

        vm.__patch__(vm._vnode, null)
        // fire destroyed hook
        callHook(vm, 'destroyed')
        // turn off all instance listeners.
        vm.$off()
    }
}
