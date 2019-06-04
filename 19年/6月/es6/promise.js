
//简单的promise实现

let Promise = function () {
  function Promise(func) {
    this.collectResolve = []
    this.collectReject = []
    this.resolve = function (str) {
      setTimeout(()=> {
        this.collectResolve.forEach( fn => fn(str))
      })
    }
    this.reject = function (err) {

    }
    func(this.resolve,this.reject)
    return this
  }
  Promse.prototype.then = function(fn) {
    this.collectResolve.push(fn)
    return this
  }
  return Promse
}
