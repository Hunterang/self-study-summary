let head = {
  data: 'A',
  next: {
    data: 'B',
    next: {
      data: 'C',
      next: {
        data: 'D',
        next: null
      }
    }
  }
}

let CreatNode(data) = function{
  this.data = data
  this.next = null
}

class CreateLink {
  construct() {
    this.head = null
    //实际上tail指向最后的引用,作用就是为了保存最后的引用，方便给next添加新的引用
    //真正的链表实际上是head ==> link
    this.tail = null
    this.length = 0
  }
  push(data) {
    //每次添加生成一个节点  || 一个引用的对象 \\方便link操作 链接 (.)
    const node = new CreatNode(data)
    if (this.length === 0) {
      this.head = node
      this.tail = node
      return
    }
    this.tail.next = node
    this.tail = node
    this.length++
  }
}
