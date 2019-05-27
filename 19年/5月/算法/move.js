let moveZero = (arr) => {
  let point = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]!=0) {
      arr[point] = arr[i]
      arr[i] = 0
      point++
    }
  }

  return arr
}

//这个是把0移到最后的一个写法
