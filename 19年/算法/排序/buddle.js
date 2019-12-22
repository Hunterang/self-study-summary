/**
 冒泡排序
 把最大的往后移动
*/

function mySort(arr) {
  if (!Array.isArray(arr)) return

  for (var i = 0; i < arr.length - 1; i++) {//循环的躺数
    for (var j = 0; j < arr.length - i - 1; j++) {//需要比较的人数 | 每次都会筛选一个最大的
      if(arr[j] > arr[j+1]) {
        let current = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = current
      }
    }
  }
  return arr
}


//第二遍设置了哨兵，可以知道最后的交换位置，那么交换之后的都是最大的数
function mySecondSort(arr) {
  if(!Array.isArray(arr)) return arr

  let n = arr.length//设置最后的交换位置 哨兵
  while (n) {
    let lastIndex = 0
    for(var i = 0; i< n-1; i++) {
      if (arr[i] > arr[i+1]) {
        let current = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = current
        lastIndex = i + 1
      }
    }
    n = lastIndex
  }
  return arr
}
