
// var  a  = require('events').EventEmitter
// module.exports = new a()
// console.log(module);
// console.log(module.exports);

//  function say (halo) {
//   console.log(halo);
// }

function work () {

}
const say = {
  say(halo) {
    console.log(halo);
  },
  eat() {

  }
}
exports.work = work
module.exports = say
console.log(module);
console.log(module.exports);

// 在commonjs中定义了exports跟module.exports的关系
var exports = module.exports ===> //暴露出一个模块，一个对象的引用，一个处在堆内存中的对象，有个人独立的空间
//由于暴露的模块是个对象，所有exports的指针指向module.exports
//为了建立起exports跟module.exports的联系,exports.xxx 给模块添加属性
