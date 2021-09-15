import { initState } from './state'
import { initRender } from './render'
import { initEvents } from './events'
import { initLifecycle, callHook } from './lifecycle'
import { initProvide, initInjections } from './inject'

let uid = 0
export  function Mixininit(Vue) {
    Vue.prototype._init = function (options) {
        const vm = this
        vm._uid = uid++
        vm.isVue = true

        if(options && options._isComponent) {
            initComponent(vm, options)   //通过引用的方式将组件的数据进行复制 || new Vue(component)
        } else {
            vm.$options = vm.options ? Object.assign(vm.options, options) : options
        }

        vm._renderProxy = vm
        vm._self = vm


        initLifecycle(vm)
        initEvents(vm)
        initRender(vm)
        callHook(vm, 'beforeCreate')
        initInjections(vm) // resolve injections before data/props
        initState(vm)
        initProvide(vm) // resolve provide after data/props
        callHook(vm, 'created')


        if(vm.$options.el) {
            vm.$mount(vm.$options.el)
        }







      }
}
function initComponent(vm, options) {
    const opts = vm.$options = Object.create(vm.constructor.options)
  // doing this because it's faster than dynamic enumeration.
  const parentVnode = options._parentVnode
  opts.parent = options.parent
  opts._parentVnode = parentVnode

  const vnodeComponentOptions = parentVnode.componentOptions
  opts.propsData = vnodeComponentOptions.propsData
  opts._parentListeners = vnodeComponentOptions.listeners
  opts._renderChildren = vnodeComponentOptions.children
  opts._componentTag = vnodeComponentOptions.tag

  if (options.render) {
    opts.render = options.render
    opts.staticRenderFns = options.staticRenderFns
  }
}
