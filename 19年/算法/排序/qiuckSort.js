/**
快速排序
*/
function qiuckSort(arr) {
    let len = arr.len
    if(len<2) return arr
    let left = []
    let right = []
    current = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < current) {
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }

    }
    return qiuckSort(left).concat(qiuckSort(right))
}
