/*只是了解一下用法
发现跟react的方法一样*/
export default {
  name: 'test',
  render(h) {
    return (<div>halo</div>)
  }
}//这样可以返回一个相应的vdom，在vue中需要相应的vue-jsx插件来编译

export default {
  name: 'test'.
  render(h) {
    h(
      'div',
      Array.apply(null,{length: 20}).map(v => h('p','haha'))
    )
  }
}//依然返回一个组件，h还可以解析组件<APP>，生成相应的vdom h代表的是createElement()方法


//vue 还提供了provide方法和inject方法，跨级传递参数
