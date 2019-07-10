function throttle(fn) {
  let deal = true
  return function () {
    if (!deal) return
    deal = false
    setTimeout(() => {
      fn.apply(this, arguments)
      deal = true
    }, 500)
  }
}//这个写法是不断点击过程中，每个500ms执行一次，不过第一次不能执行


function throttle2(fn) {
  let lastTime = 0
  return function () {
    if (lastTime !== 0 && (+new Date() - lastTime < 500))  return
    lastTime = +new Date()
    fn.apply(this, arguments)
  }
}
//好吧，也就那样，反正道理都是一样的
