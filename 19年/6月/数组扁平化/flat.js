//主要是es6的结构没想到concat这么神奇

let flat = (arr) => {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
}
//reduce聚合写法
let flat2 = (arr) => {

  return arr.reduce((a,b) => {
    // Array.isArray(b) ? a.concat(...b) : a.concat(b)
    if (Array.isArray(b)) {
      return a.concat(...flat2(b))
    }else {
      return a.concat(b)
    }
  },[])
}

var arrs = [[123,[1,2,3],[124,7,8]],1,[22,44]]

flat2(arrs)




// function getRandomStr(n) {//一个临时插曲
//   let time = Math.ceil(n/6)
//   let rest = n%6
//   let result = ''
//   for (var i = 0; i <time; i++) {
//     if (i === time-1) {
//       result+=Math.random().toString().slice(-rest)
//       break
//     }
//     result+= Math.random().toString().slice(-6)
//   }
//   return result
// }
