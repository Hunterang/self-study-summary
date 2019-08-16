let str = "abcabcabcbbccccc";
let num = 0;
let char = '';

 // 使其按照一定的次序排列
str = str.split('').sort().join('');
// "aaabbbbbcccccccc"

// 定义正则表达式
let re = /(\w)\1+/g;
str.replace(re,($0,$1) => {
    if(num < $0.length){
        num = $0.length;
        char = $1;
    }
});
console.log(`字符最多的是${char}，出现了${num}次`);


//$0表示匹配到的具体东西，$1到$9表示第几个括号内的元素



//首字母大写,驼峰转换
let tof = 'get-elment-by-id'
tof.replace(/-w/, _ => _[1].toUpperCase())
