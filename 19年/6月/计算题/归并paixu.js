function mergeSort(arr) {
  let left,right,len = arr.length
  if (len < 2) {
    return arr
  }
  let middle = Math.floor(len>>1)
  left = arr.slice(0,middle)
  right = arr.slice(middle)

  return merge(mergeSort(left),mergeSort(right))
}

function merge ( left, right ) {
  let result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    }else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.unshift())
  }
  while (right.length) {
    result.push(right.unshift)
  }

  return result
}
