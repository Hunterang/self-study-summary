//感觉再写一遍不一定会写
//思路 先一个一个比较，再两个两个比较。。。。。
//下面的题目在测试中显示超时了
// var shortestSubarray = function(A, K) {
//     let n = -1,len = 1,sum = 0
//     while (len <= A.length) {
//       for (var i = 0; i <= A.length-len; i++) {
//         if( A[i] >= K) {
//           n = len
//           break
//         }
//         let j =i
//         while(j < len+i){
//           sum+=A[j]
//           j++
//         }
//         if (sum >= K) {
//           n = len
//           break
//         }
//
//       }
//       if (n==len) {
//         break
//       }
//       len++
//     }
//     return n
// };
//
// shortestSubarray([2,-1,2],3)


//时间超限，好吧这个是我智力限制条件，有看了其他人的答案，但没心思研究别人的
//开始下一个坑，继续踩

var shortestSubarray = function(A, K) {
    let len = A.length,
    current=0,
    next=0,
    compareLen = 1,//即将进行比较的长度
    realResault = -1,
    temp = current
    while (compareLen <= len) {
      current = current+A[compareLen-1]
      for (var i = 0; i < len-compareLen; i++) {
        if( i==0 ) {
          next = current
        }else {
          next = next-A[i-1]+A[i+compareLen-1]
        }
        if (next >= K) {
          realResault = compareLen
          break
        }
      }
      if(realResault !== -1) break
      compareLen++
    }
    return realResault
}
