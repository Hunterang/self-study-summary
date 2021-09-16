import defineReactive from './observe/index'

export function initRender (vm) {
    vm._vnode = null // the root of the child tree
    vm._staticTrees = null // v-once cached trees
    const options = vm.$options
    const parentVnode = vm.$vnode = options._parentVnode // the placeholder node in parent tree
    const renderContext = parentVnode && parentVnode.context
    vm.$slots = resolveSlots(options._renderChildren, renderContext)
    vm.$scopedSlots = emptyObject
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
  
    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    const parentData = parentVnode && parentVnode.data
  
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, () => {
        !isUpdatingChildComponent && warn(`$attrs is readonly.`, vm)
      }, true)
      defineReactive(vm, '$listeners', options._parentListeners || emptyObject, () => {
        !isUpdatingChildComponent && warn(`$listeners is readonly.`, vm)
      }, true)
    } else {
      defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true)
      defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true)
    }
  }


  function resolveSlots() { //返回slot对象  || 不实现

  }
  function createElement() { //复杂返回虚拟dom  || 不实现

  }






const callBacks = []
const currentRenderingInstance = null
export function renderMixin(Vue) {
    Vue.prototype.$nextick = function (fn) {
        const vm = this

        let _reslove

        callBacks.push(() => {
            if(fn) {
                try {
                    fn.call(vm)
                } catch (err) {
                    throw Error(err)
                }
            }  else if(_reslove){
                _reslove(vm)
            } 

        })
        if(!cb && typeof Promise !== 'undefined') {
            return  new Promise(res => {
                _reslove = res
            }) 
        }

    }

    Vue.prototype._render = function () {
        const vm = this

        const { render, _parentVnode } = vm.$options //jsx || 或者是component

        if (_parentVnode) {
            //暂不处理
         }

         vm.$vnode = _parentVnode //个人的虚拟dom


         let vnode
          try {
            currentRenderingInstance = vm
              //vm._renderProxy 初始化的时候构建过 == vm
              vnode = render.call(vm, vm.$createElement)
          } finally {
            currentRenderingInstance = null
          }
          vnode.parent = _parentVnode
          return vnode
    }
}   
