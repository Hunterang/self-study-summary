//虽然不知道有什么用但是还是实现以下，我看了很多解法，但是并没有让我感觉有什么很深刻的理解
//主要原因是因为，微任务似乎不是我们可以实现的，我认为这才是promise的核心，如果你用了settimeout代替那就不好了

const PENDING ='pending'
const RESOLVE = 'fulfilled'
const REJECT ='reject'

const Mypromise = function (excuter) {
  this.state = PENDING

  this.value = ''

  this.reason = ''
  this.onFullFilledCallbacks = []
  this.onRejectedCallBacks = []

  let resolve =function (v) {

  }
  let reject = function () {

  }
  try {
    excuter(resolve, reject)
  } catch (e) {
    reject(e)
  }
}
//1.0版 首先then必须返回一个新的promise
Mypromise.prototype.then = function(onfulfilled, onrejected) {
  let newPromise
  return (newPromise = new Mypromise((resolve,reject) => {}))
}
