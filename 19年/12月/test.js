let globalCounter = 0;
 const poolGenerator = () => {
   globalCounter += 1;
   return [...new Array(5)].map((v, i) => `第${globalCounter}轮池中第${i+1}个成员`);
 };
 const cb = ele => { console.log(ele, new Date().getTime())};
 taskRunner(poolGenerator, cb)



 function taskRunner(poolGenerator, cb) {
   const wait = 5000

   let poolArray = poolGenerator()
   let len = poolArray.length
   let start = 0
   let timer = setInterval(() => {
     let index = start%len
     if(start !== 0 && index === 0) {
       poolArray = poolGenerator()
     }
     try {
       cb(poolArray[index])
       start++
     } catch (e) {
       console.log(e)
       clearInterval(timer)
     }

   }, wait)
 }

 // 题目三、
 // 【编码题】根据表达式计算字母数
 /**
  * 根据表达式计算字母数
  * 说明：
  *   给定一个描述字母数量的表达式，计算表达式里的每个字母实际数量
  *   表达式格式：
  *     字母紧跟表示次数的数字，如 A2B3
  *     括号可将表达式局部分组后跟上数字，(A2)2B
  *     数字为1时可缺省，如 AB3。
  * 示例：
  *   countOfLetters('A2B3'); // { A: 2, B: 3 }
  *   countOfLetters('A(A3B)2'); // { A: 7, B: 2 }
  *   countOfLetters('C4(A(A3B)2)2'); // { A: 14, B: 4, C: 4 }
  */
 function countOfLetters(string) {
   /** 代码实现 */
   let object = {}
   let reg = /\(?\w+|\)\d*/g
   string.replace(reg, (a, b)=> {
     if(!a.startsWith('(')) {
       a.replace(\(\w)(\d)*\g, (a,b,c) => {
         object[b] = c || 1
       })
     }else {
      if(!a.startsWith(')')) {
         // object.group === void 0 && object.group = {}
         createGroup(object, a)
      }else {
        endGroup(object, a)
      }

     }
   })
 }

function createGroup(object, a) {
//  object.group === void 0 && object.group = {}
  if (object.group === void 0) {
    object.group = {}
    a.replace(\(\w)(\d)*\g, (a,b,c) => {
      object.group[b] = c || 1
      object.group.isEnd = false
    })
  }else {
    createGroup(object.group, a)
  }
}

function endGroup() {

}
