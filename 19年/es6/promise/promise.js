//虽然不知道有什么用但是还是实现以下，我看了很多解法，但是并没有让我感觉有什么很深刻的理解
//主要原因是因为，微任务似乎不是我们可以实现的，我认为这才是promise的核心，如果你用了settimeout代替那就不好了

//then好复杂，其中要考虑到现在处于何种状态，是pedding push() 不是的话返回promise

//为什么then执行的时候会有fulfilled和rejected状态???





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
    if(v instanceof Promise ) {
      return v
    }
    setTimeout(() => {
      this.onFullFilledCallbacks.forEach(cb => {
        cb(v)
      })
    })
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
  // let newPromise
  // return (newPromise = new Mypromise((resolve,reject) => {}))
  const that = this
  let newPromise
  onfulfilled =typeof onfulfilled === 'function'
    ? onfulflilled
    : value =>value
  onrejected = typeof onrejected === 'function'
    ? onrejected
    : err => { throw err}


  if (that.status === FULFILLED) { // 成功态
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try{
                    let x = onFulfilled(that.value);
                    resolvePromise(newPromise, x, resolve, reject); // 新的promise resolve 上一个onFulfilled的返回值
                } catch(e) {
                    reject(e); // 捕获前面onFulfilled中抛出的异常 then(onFulfilled, onRejected);
                }
            });
        })
    }

    if (that.status === REJECTED) { // 失败态
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onRejected(that.reason);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
        });
    }

    if (that.status === PENDING) { // 等待态
        // 当异步调用resolve/rejected时 将onFulfilled/onRejected收集暂存到集合中
        return newPromise = new Promise((resolve, reject) => {
            that.onFulfilledCallbacks.push((value) => {
                try {
                    let x = onFulfilled(value);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
            that.onRejectedCallbacks.push((reason) => {
                try {
                    let x = onRejected(reason);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
        });
    }

}
