/**
归并排序
*/
function middleSort(arr) {
    let len = arr.length
    if (len < 2) return arr
    let middle = Math.ceil(len/2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)

   return merge(middleSort(left), middleSort(right))
}
function merge (left, right) {
    let arr = []
    while(left.length && right.length) {
        if(left.unshift() > right.unshift()) {
            arr.push(right.unshift())
        } else {
            arr.push(left.unshift())
        }
    }
    while (left.length) {
        arr.concat(left)
    }
    while (right.length) {
        arr.concat(right)
    }
    return arr
}
