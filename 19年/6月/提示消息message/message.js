function vDom(el,att,children=[]) {
  let elDom = document.createElement(el)
  Object.keys(att).forEach( k => {
    elDom.setAttribute(k,att[k])
  })
  children.forEach(v => {
    if (v && typeof v == 'object') {
      let vel = v.el
      let vAtt = v.att ? v.att : {}
      let vChildren = v.children ? v.children : []
      let elChildren = vDom(vel,vAtt,vChildren)
       elDom.appendChild(elChildren)
    }else {
      elDom.innerHTML = v
    }
  })
  return elDom
}


export function message(bool,msg) {
  let ms = vDom(
    'div',{ 'class': 'message_all'},
    [{
      el: 'div',
      att: { 'class': bool ? 'message_left_ok' :'message_left_err'},
      children: [bool ? '√' : '!']
    },{
      el: 'div',
      att: { 'class': bool ? 'message_right_ok' :'message_right_err'},
      children: [msg]
    }]
  )

  document.body.appendChild(ms)

  setTimeout(() => {
    document.body.removeChild(ms)
  },1500)
}
//应用虚拟dom的方法，将生成的一个div插入body，根据不同的bool给予不同的classer展示不同的效果，这个只是一个初级版本，没有进行深度的扩展
//可以将message挂载到全局这样方便每个组件使用
