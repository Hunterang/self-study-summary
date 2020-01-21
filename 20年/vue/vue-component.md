```
//vue组件重点，参数，事件，slot
//vue高阶组件

function withComponent(WrappedComponent) {
  return {
    props: WrappedComponent.props,
    render(h) {
      const slots = Object.keys(this.$solts).reduce((a, b) =>  a.concat(this.$slot[b]), [])
      return h(WrappedComponent,{
        on: this.$listeners,
        attr: this.$attrs,
        props: this.$props
     }, slots)
    }
  }
}
//数据透传，事件
```

react似乎有意把自己打造成全新的js文件，纯粹的js文件。
react高阶组件 -- 意义为了增强组件（赋予被包裹组件状态，功能，更加的视图跟模型的分离）
代理模式 ： 纯粹的Hoc，作用操作props，访问ref，抽离状态，包装组件。其目的是为了保证受包裹组件更加纯粹。
hoc：为了复用组件？：不是十分清晰
props - render： 道理跟hoc类似，处理的数据比较小的话使用该方法。
ref：回调的形式比较推荐 ref = {(input) => (this.input = input)},组件挂载回调函数被使用，参数是dom本身。



不需要状态跟生命周期的的组件使用Functional的组件。否则使用class
