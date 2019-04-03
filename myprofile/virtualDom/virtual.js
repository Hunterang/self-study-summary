MinxRender( Element )
function Element( target,props,children ) {
  this.target = target
  this.props = props
  this.children = children
}

function MinxRender( Element ) {
  Element.prototype.render = function () {
    var el = document.createElement(this.target)
    var props = this.props
    for (var key in props) {
    var  val = props[key]
    el.setAttribute(key,val)
    }
    var children = this.children
    children.forEach(val => {
      var child = ( val instanceof Element ) ? val.render() : document.createTextNode(val)
      el.appendChild( child )
    })
    return el
  }
}


function el( target,props,children ) {
  return new Element( target,props,children )
}
