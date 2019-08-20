let arr = Array(5)
let i = 0
function generateArr(arr) {
  if (i>5) return arr;
    let rand = generateRand(arr)
    arr[i] = rand
    i++
   return generateArr(arr)
}
function generateRand(arr) {
  let rand = Math.floor(Math.random()*30)+2
  if (arr.some(item => item == rand))  return generateRand(arr);
  return rand
}
generateArr(arr)
