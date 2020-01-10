/**
*要求输入一串字符串，自上而下，自左而右，生成z型，虽然把例子完成了，但是测试用例有问题
*说明严谨性上有待提升，但是输入一定长度的字符串，3和4是对的，所以也暂时保留，作为参考
*/



let numberRow = 3
function setStrZ(str) {
    let len = str.length
    let vLen = numberRow+numberRow-2
    let y = Math.ceil((len-numberRow)/vLen)

    let allList = []
    for (let i=0; i< numberRow;i++) {
        let rowList = [],index = 0
        for (let j=0; j<y*(numberRow-1)+1; j++) {
            if(j%(numberRow-1) === 0) {
                rowList.push(str.charAt(i+index*vLen))
                index++
            }else if((j+i)%(numberRow-1) === 0) {
                rowList.push(str.charAt((index)*vLen-i))
            }else {
                rowList.push(' ')
            }
        }
        allList.push(rowList)
    }

   let newStr = [].concat(...allList).join('')
   console.log(newStr.replace(/\s+/g, ''));

    return newStr.replace(/\s+/g, '')
}
setStrZ("LEETCODEISHIRING")
