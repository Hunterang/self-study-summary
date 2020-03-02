/*
*2020-3-1
*push()
*pop()
*先进先出
*/

function Mystack() {
  this.length = 0
}

Mystack.prototype.push = function(x) {
  this.length += 1
  this[this.length-1] = x
}

Mystack.prototype.pop = function() {
  if(this.lenght === 0) { return }
  this.length -= 1
  if(this.length === 0) {
    delete this['0']
    return
  }
  for(var i = 0;i<this.length; i++) {
    this[i] = this[i+1]
  }
  delete this[i]
}

var arr = new Mystack()
console.log(arr);
arr.push('123')
console.log(arr);
arr.push('321')
console.log(arr);
arr.push('2344')
console.log(arr);
