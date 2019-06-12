let select = (arr) => {
  let len = arr.length
  let minIndex = 0
  let current = 0

  for (var i = 0; i < len-1; i++) {
    minIndex = i
    for (var j = i+1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    current = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = current
  }
  return arr
}
