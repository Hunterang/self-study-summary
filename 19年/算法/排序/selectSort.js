/**
* 选择排序
*/

function selectSort(arr) {
  let len = arr.length
  let minIndex, current
  for (var i = 0; i < arr.length -1; i++) {
    minIndex = i//默认起始位置为最小的开始进行比较
    for (var j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    //可以比较Mindex > i? 执行
    current = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = current
  }
  return arr
}
