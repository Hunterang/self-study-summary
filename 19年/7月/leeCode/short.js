//感觉再写一遍不一定会写
//思路 先一个一个比较，再两个两个比较。。。。。
//下面的题目在测试中显示超时了
var shortestSubarray = function(A, K) {
    let n = -1,len = 1,sum = 0
    while (len <= A.length) {
      for (var i = 0; i <= A.length-len; i++) {
        if( A[i] >= K) {
          n = len
          break
        }
        let j =i
        while(j < len+i){
          sum+=A[j]
          j++
        }
        if (sum >= K) {
          n = len
          break
        }

      }
      if (n==len) {
        break
      }
      len++
    }
    return n
};

shortestSubarray([2,-1,2],3)
