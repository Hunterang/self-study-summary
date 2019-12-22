/**
插入排序
就像打扑克牌
*/

function insertSort(arr) {
  let current, cIndex
  for (var i = 1; i < arr.length; i++) {
    current = arr[i]
    cIndex = i
    while (cIndex > 0 && arr[cIndex-1] > current) {
      arr[cIndex] = arr[cIndex-1]
      cIndex--
    }
    arr[cIndex] = current
  }
  return arr
}
