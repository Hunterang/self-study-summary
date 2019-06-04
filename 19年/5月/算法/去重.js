let unique = (arr) => {
  let neArr = []
  for (var i = 0,len =arr.length; i < len; i++) {
      if (neArr.indexOf(arr[i]) < 0) {
        neArr.push(arr[i])
      }
  }
  return neArr
}



let nuniq2 = (arr) => {
    return  [...new Set(arr)]
}
