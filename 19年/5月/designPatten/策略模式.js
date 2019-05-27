/**方法只是个人实验情况，构造制作规则**/
//策略模式就是根据不通条件，做出不同的处理行为

(function() {
  //校验规则私有化，最终将模式暴露给全局
  function valiEnpty(str) {
      //这里写入校验规则
  }
  function valiLength(str) {

  }

  class strategy {
    constructor() {
      this.valitor = {}
      this.init()
    }
    init() {
      this.mailValidator()
      // this.numValidator()
      // this.userValidator()
      //以此类推，甚至可以有更多的验证方式，创建一个验证工厂也可以
    }
    mailValidator(...arg) {
      this.valitor['mail'] = [this.valiEnpty,this.valiLength, ...arg]
      //自我发挥了
    }

    addValitor(vtor,...fn) {//vtor为教验者，fn为教验规则
      let valitor = this
      valitor[vtor] = valitor[vtor] || []
      valitor[vtor]= [...fn]
    }
    useValitor(vtor,str) {
      if (!valitor[vtor]) {
        return false
      }
      if (!str) {
        return false
      }
      let res = []
      valitor[vtor].forEach(fn => {
          res.push(fn(str))
      })
      if (res.indexOf(false)!= -1) {
        return false//非法字符串
      }else {
        return true
      }
    }
  }

  typeof('export') == 'object' ? export { strategy } : window.strategy
}())

//使用规则，就是let strate =new strategy()
//strate.useValitor('mail','923071272@qq.com')
//strate.useValitor('qq','923071272')
