function newFn(Fn) {
  let o = {
    "__proto__": Fn.prototype
  }
    function nFn(...args) {
     Fn.apply(o,args)
     return o
   }
   return nFn
}
let list = []
function findValue(str,result = [],list = list) {
  // list.forEach( v =>  {
  //   if (v.id === str) {
  //     return result.concat(v.id)
  //   }else {
  //     result.concat(v.id)
  //   }
  // })
  for (var i = 0; i < list.length; i++) {
      if (v.id === str) {
        return result.concat(v.id)
      }else {
        result.concat(v.id)
      }
  }
}

function tes() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
    if( i == 2) return
  }
}


//这个是一道面试题，要求对数字进行递归翻转，自己做的，赞
function rotate(nums) {
  let str = ''
  let current = nums%10
  str = str+current
  if (Math.floor(nums/10) > 0 ) {
    return str+ rotate(Math.floor(nums/10))
  } else {
    return str
  }
}
//下面是node cmd输出文字颜色设置
/*
console.log('\x1B[36m%s\x1B[0m', info);  //cyan

console.log('\x1B[33m%s\x1b[0m:', path);  //yellow

var styles = {

    'bold'          : ['\x1B[1m',  '\x1B[22m'],

    'italic'        : ['\x1B[3m',  '\x1B[23m'],

    'underline'     : ['\x1B[4m',  '\x1B[24m'],

    'inverse'       : ['\x1B[7m',  '\x1B[27m'],

    'strikethrough' : ['\x1B[9m',  '\x1B[29m'],

    'white'         : ['\x1B[37m', '\x1B[39m'],

    'grey'          : ['\x1B[90m', '\x1B[39m'],

    'black'         : ['\x1B[30m', '\x1B[39m'],

    'blue'          : ['\x1B[34m', '\x1B[39m'],

    'cyan'          : ['\x1B[36m', '\x1B[39m'],

    'green'         : ['\x1B[32m', '\x1B[39m'],

    'magenta'       : ['\x1B[35m', '\x1B[39m'],

    'red'           : ['\x1B[31m', '\x1B[39m'],

    'yellow'        : ['\x1B[33m', '\x1B[39m'],

    'whiteBG'       : ['\x1B[47m', '\x1B[49m'],

    'greyBG'        : ['\x1B[49;5;8m', '\x1B[49m'],

    'blackBG'       : ['\x1B[40m', '\x1B[49m'],

    'blueBG'        : ['\x1B[44m', '\x1B[49m'],

    'cyanBG'        : ['\x1B[46m', '\x1B[49m'],

    'greenBG'       : ['\x1B[42m', '\x1B[49m'],

    'magentaBG'     : ['\x1B[45m', '\x1B[49m'],

    'redBG'         : ['\x1B[41m', '\x1B[49m'],

    'yellowBG'      : ['\x1B[43m', '\x1B[49m']

};*/
