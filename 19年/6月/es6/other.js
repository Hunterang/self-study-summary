function fn(func,timing) {
  let time = +new Date()
  return function () {
    let timer2 = +new Date()
    if(timer2 - time > timing) {
       func.bind(this,...arg)
       time = timer2
    }else {
      return null
    }
  }
}
