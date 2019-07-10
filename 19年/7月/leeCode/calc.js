//计算数字的7倍，不用+-%*
function base7(num) {
  let str = Number(num).toString(7)+0
  return parseInt(str,7)
}

//位运算加法
// function addwei(m,n) {
//   while (m) {
//     [m,n] = [(m&n)<<1,m^n]
//   }
//   return m
// }

function addwei (m,n) {

  while (m) {
    let temp = m
    m = (m&n)<<1
    //当m&n不再有进位的时候  n^m就是我们想要的值
    n = n^temp
  }
  return n
}
