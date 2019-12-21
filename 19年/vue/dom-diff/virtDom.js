/**
*一个不包括子组件,功能的超级简易版dom-diff算法
*如果子组件的变量在不发生变化的时候可以不做执行，如果位置发生变化，需要将之前的子组件引用到新的组件
*
*/
const VNodeType = {
  "HTML": "HTML",
  "TEXT": "TEXT",
  "COMPONENT": 'COMPONENT'
}

const ChildTyps = {
  "EMPTY": "EMPTY",
  "SINGLE": "SINGLE",
  "MULTIPLE": "MULTIPLE"
}
const HTML = ['html', 'div', 'p', 'span', 'ul', 'li', 'h1', 'body', 'title', 'script', 'dl', 'dd', 'dt',
'head', 'meta', 'header', 'footer', 'nav', 'article', 'ol', 'form', 'button', 'input', 'strong', 'a', 'label',
'iframe', 'cite', 'canvas', 'svg', 'audo', 'video', 'img', 'table', 'tr', 'th', 'td', 'style', 'link']
function createElement(tag, attr, children) {
  let flag
  if(typeof tag === 'string') {
    if( HTML.includes(tag) ) {
      flag = VNodeType.HTML
    }else {
      flag = VNodeType.TEXT
      return createTextNode(tag)
    }
  }else if (typeof tag === 'function') {
    flag = VNodeType.COMPONENT
    //此处应该执行该component
  }else {
    flag = VNodeType.TEXT
    return createTextNode(String(tag))
  }

  let childFlags

  if (Array.isArray(children)) {
    if(!children.length) {
      childFlags = ChildTyps.EMPTY
    }else {
      childFlags = ChildTyps.MULTIPLE
    }
  }else {
    childFlags =ChildTyps.SINGLE
    children = createTextNode(children + '')
  }

  return {
    flag,
    tag,
    attr,
    key: attr && attr.key,
    childFlags,
    children,
    el: null
  }
}


function createTextNode(children) {
  return {
    flag: VNodeType.TEXT,
    tag: null,
    attr: null,
    key: null,
    children,
    childFlags: ChildTyps.EMPTY,
    el: null
  }
}

function patchData(el, key, prevData, nextData) {
    if(key == 'style') {
      if (nextData) {
        for (var attr in nextData) {
          el.style[attr] = nextData[attr]
        }
      }
      if (prevData) {
        for (var attr in prevData) {
          if (!nextData.hasOwnProperty(attr)) {
            el.style[attr] = ''
          }
        }
      }
    }else if (key == 'className') {
        //只要patch就变为后面的
        el.class = nextData

    }else if ( key[0] == '@') {
      if (prevData) {
        el.removeEventListener(key.slice(1), prevData[key])
      }
      if (nextData) {
        el.addEventListener(key.slice(1), nextData[key])
      }
    }else {
      el.setAttribute(key, nextData)
    }
}


function render(vnode, container) {
  if (!container.vnode) {
    mount(vnode, container)
  }else {
    patch(vnode, container.vnode, container)
  }
  container.vnode = vnode
}

function mount(vnode, container, refNode) {

  if (flag === VNodeType.HTML) {
    mountElement(vnode, container, refNode)
  }else if (flag === VNodeType.COMPONENT) {
    mountComponent(vnode, container)
  }else if (flag === VNodeType.TEXT) {
    mountText(vnode, container)
  }
}

function mountElement(vnode, container, refNode) {
  let el = document.createElement(vnode.tag)
  vnode.el = el
  const data = vnode.attr
  if (data) {
    for(let key in data) {
      patchData(el, key, null, data[key])
    }
  }

  const children = vnode.children
  const childType = vnode.childType

  if (!childType == ChildTyps.EMPTY) {
    if (childType == ChildTyps.SINGLE) {
      mount(children, el)
    }else if (childType == ChildTyps.MULTIPLE) {
      for (var i = 0; i < children.length; i++) {
        mount(children[i], el)
      }
    }
  }
  refNode ? container.insertBefore(el, refNode) : container.appendChild(el)
}

function mountText(vnode, container) {
  let el = document.createTextNode(vnode.children)
  vnode.el = el

  container.appendChild(el)
}






function patch(vnode, prevVNode, container) {
  let preflag = prevVNode.flag
  let newflag = vnode.flag
  if (preflag !== newflag) {
    replaceVNode(vnode, prevVNode, container)
  }else if (newflag == VNodeType.HTML) {
    patchElement(vnode, prevVNode, container)
  }else if (newflag == VNodeType.TEXT) {
    patchText(vnode, prevVNode)
  }
}

function replaceVNode(vnode, prevVNode, container) {
  container.removeChild(prevVNode.el)
  mount(vnode, container)
}

function patchElement(vnode, prevVNode, container) {
  if (vnode.tag!==prevVNode.tag) {
    replaceVNode(vnode, prevVNode, container)
  }

  let el = (vnode.el = prevVNode.el)
  const preData = prevVNode.attr
  const newData = vnode.attr

  if (newData) {
    for (var key in preData) {
      const preValue = preData[key]
      const newValue = newData[key]

      patchData(el, key, preValue, newValue)
    }
  }
  if (preData) {
    for (let key in prevData) {
      const prevValue = prevData[key]
      if (prevValue && !newData.hasOwnProperty(key)) {
        patchData(el, key, prevValue, null)
      }
    }
  }

  patchChildren(
    vnode.childType,
    prevVNode.childType,
    vnode.children,
    prevVNode.children,
    el
  )
}

function patchChildren(
  newChildType,
  prevChildType,
  newChildNode,
  prevChildVNode,
  container
) {
  switch (prevChildType) {
    case ChildTyps.SINGLE:
      if (newChildType == ChildTyps.SINGLE) {
        patchText(newChildNode, prevChildVNode)
      }else if (newChildType == ChildTyps.MULTIPLE) {
        container.removeChild(prevChildVNode.children)
        for (var i = 0; i < newChildNode.length; i++) {
          container.appendChild(newChildNode[i])
        }
      }else if (newChildType == ChildTyps.EMPTY){
        container.removeChild(prevChildVNode.children)
      }
      break;
      case ChildTyps.EMPTY:
      for (var i = 0; i < newChildNode.length; i++) {
        container.appendChild(newChildNode[i])
      }
      break;
    case ChildTyps.MULTIPLE:
      if (newChildType == ChildTyps.SINGLE) {
        for (var i = 0; i < prevChildVNode.length; i++) {
          container.removeChild(prevChildVNode[i].el)
        }
        container.appendChild(newChildNode)
      }else if (newChildType == childType.EMPTY) {
        for (var i = 0; i < prevChildVNode.length; i++) {
          container.removeChild(prevChildVNode[i].el)
        }//至于slot，等等的暂时现不解析
      }else if(newChildType == childType.MULTIPLE){
        let lastIndex = 0
        for (let i = 0; i< newChildNode.length; i++) {
          const nextVNode = newChildNode[i]
          let j = 0,find = false
          for (j; j < prevChildVNode.length; j++) {//新的子节点
            const prevVNode = prevChildVNode[j]
            if (nextVNode.key === prevVNode.key) {//挂载好的结点
              find = true
              patch(nextVNode, prevVNode, container)
            }
            if(j < lastIndex) {
              //这个感觉太简易了，实际的应该比这更复杂的计算，id设计的合理性十分关键
              const refNode = nextChildren[i - 1].el.nextSibling
              container.insertBefore(prevVNode.el, refNode)
              //结点移动
            } else {
              lastIndex = j
            }
          }
          if(!find) {
            //挂在当前结点
            const refNode=
              i - 1 < 0
                ? prevChildren[0].el
                : newChildNode[i - 1].el.nextSibling
            mount(nextVnode, container, refNode)
          }
        }
        //删除不存在的结点
        for (let i = 0; i < prevChildVNode.length; i++) {
          const prevVNode = prevChildVNode[i]
          const has = newChildNode.find(
            next => next.key === prevVNode.key
          )
          if(!has) {
            //移除
            container.removeChild(prevVNode.el)
          }
        }
      }
      break;
    default:

  }
}


function patchText(vnode, prevVNode) {
  let el = (vnode.el = prevVNode.el)
  if (vnode.tag !== prevVNode.tag) {
    el.nodeValue = vnode.tag
  }
}
