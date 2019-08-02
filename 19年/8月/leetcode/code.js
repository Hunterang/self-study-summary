function sortarr(arr) {
    let a1 = [],min = max = 0,result= []
    for (var i = 0; i < arr.length; i++) {
      min = arr[i]>= min? min: arr[i]
      max = arr[i]>= max? arr[i]: max
      a1[arr[i]] =  a1[arr[i]]? ():  1
    }
    for (var j = min; j <= max; j++) {
      if (a1[j]>0) {
        result= result.concat(Array(a1[j]).fill(j))
      }
    }
    return result
  }
  sortarr([2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2])
    //输出[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]
