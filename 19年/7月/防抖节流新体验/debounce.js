function debounce(fn) {
  let timer = null
  return function() {
    clearTimeout(timer)
    timer = setTimeout(()=> {
      fn.apply(this,arguments)
    },500)
  }
}
function submit (user,pass) {

}
let dbce = debounce(this.submit)
// object.addEventListener('click',debounce(submit).bind(this,...arg))
function handleClick(...arg) {
  dbce.call(this,...arg)
}
//每次debounce、一个函数都会生成一个timer用于清除定时器，返回一个函数在传参、、
//根据这样的写法，不需要再给全局添加变量实在是简单，执行之后的代码不断执行是一种思路
//连续触发的事件是执行之后的事件，而不是事件本身，其本身的作用是为了添加相应的参数，减少全局参数
//闭包的作用还是很有用的


//一个不断清除定时器跟生成定时器的过程，最终执行一次
