
var a = 0

function count () {
  if (true) {
    // console.log(num);
    var length = Math.ceil((2000-a)/10)
    if (length == 0) {
       cancle()
       return
    }
    a = a+length
  document.getElementById('app').innerHTML = a
  }else {
    states = true
  }
  window.requestAnimationFrame(count)
}

window.requestAnimationFrame(count)

function cancle () {
  window.cancelAnimationFrame(count)
}
