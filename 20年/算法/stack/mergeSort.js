/*
*2020/3/3
**/
//给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

//初始化 A 和 B 的元素数量分别为 m 和 n。

function merge(A, m, B, n) {
  for(var i = 0; i++; i< n) {
    A[m+i] = B[i]
  }
  while(A.length > m+n) {
    A.pop()
  }
  let len = m+n
  while(len) {
    let hooker = 0
    for(var j=0;j<len-1;j++) {
      if(A[j] > A[j+1]) {
        let temp = A[j]
        A[j] = A[j+1]
        A[j+1] = temp
        hooker = j
      }
    }
    len = hooker
  }
}
