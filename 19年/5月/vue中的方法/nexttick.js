let cbs=[]
function nextTick(cb,cxt) {//这个方法是vue中nexttick的方法，实际中传入回调函数，否则执行之后返回promise方法，该回调函数保存到全局的cbs中，此处仅仅是模拟
  //闭包
  // let _resolve
  // let packege = () => {
  //   var txt = '123'
  //   let resolve = v => typeof(v)
  //   _resolve = resolve//将内部函数赋值给外部作用域的方法
  //                     //window.onclick = resolve 也算一个//dom.onclick = resolve 也算
  // }
  //
  // cbs.push( () => {
  //   if (_resolve) {
  //     _resolve('123')
  //   }
  // })
  // setTimeout( ()=> {
  //   cbs.forEach( cb => cb())
  // },1000)

  let _resolve

    cbs.push(function () {//cbs属于异步执行，所以如果不存在cb就会返回promise可以使用.then方法，但是存在兼容性问题，ie：是我吗。。。
      if (cb) {
        cb(cxt)
      }else if(_resolve){
        _resolve(cxt)
      }
    })
    if (!cb) {
      return new Promise( resolve => {
        _resolve = resolve
      })
    }

}
