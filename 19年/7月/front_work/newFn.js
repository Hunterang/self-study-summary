function newFn(Fn) {
  let o = {
    "__proto__": Fn.prototype
  }
    function nFn(...args) {
     Fn.apply(o,args)
     return o
   }
   return nFn
}
