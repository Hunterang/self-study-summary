function extend(Vue,options) {
  Vue.extend = function(options) {
    let super = this //Vue
    let superId = this.cid
    let captor = options.Ctor || (options.Ctor={})
    if (captor[superId]) {
      return captor[superId] //该组件存在了，就直接
    }


    let Sup = function (opt) {
      this._init(opt) //继承了this之后就会有了——init方法
    }
    //merge(opt跟options)
    Sup.prototype = Object.create(super.prototype)
    Sup.prototype.constructor = Sup
    Sup['super'] = Sup
    Sup.cid =cid++//这个cid是个全局变量应该，每个vue实例都会被标记

    /*
    *
    *@还有很多就暂时不写了，因为没有深入挖掘，如果后续有必要再说
    *大致是把所有vue的 static方法再给拿过来用
    */
    captor[superId] = Sup
    return Sup

  }
  Vue.extend(options)
}
//返回了一个继承了vue的构造函数,并且会把合并的参数绑定到sup.sealedOtions
// let App = extend(options) 现在app跟Vue处于相同状态
// new App().$mount('#app') ->这个方法创造出来是为了在一个页面搞两个挂载吗？
