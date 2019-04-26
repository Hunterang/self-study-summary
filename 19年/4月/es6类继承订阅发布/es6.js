
const compose =
...args => x => args.reduceRight( (res,cb) => cb(res), x)

//es6中的 => 代表return后面的函数、对象、值等等
//上面是一个经典的聚合函数


var compose = function (...args) {

  return function (x) {
    return args.reduceRight( (res,cb) => cb(res),x )
  }

}
