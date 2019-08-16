class Watcher {
  constructor(vm, express, cb) {
    this.vm = vm
    Dep.target = this
    this.vm[express]
    Dep.target = null
    this.cb = cb
  }
  update() {
    this.cb()
  }
}
let object = {
  name: 'React',
  methods: ['Component','createElement']
}
console.log('name' in object);
