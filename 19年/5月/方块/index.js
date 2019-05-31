let squareSet = []
let nextElement = null
let dvnamicElment = null
let elementType = []
let colorType = ['#123456','#654321']
let techris = document.getElementById('terise')



function initTerise() {
  squareSet = new Array(20)//列
  for (var i = 0; i < squareSet.length; i++) {
      squareSet[i] = new Array(10)
  }
}

// let allElement = [
//   {
//     type: 'sideBulgeLeftElement',
//     stadus: [//四种状态表示每个小单元格的位置
//       [{offsetX:0,offsetY:0},{offsetX:0,offsetY:0},{offsetX:0,offsetY:0},{offsetX:0,offsetY:0}],
//       [{offsetX:0,offsetY:0},{offsetX:0,offsetY:0},{offsetX:0,offsetY:0},{offsetX:0,offsetY:0}],
//       [{offsetX:0,offsetY:0},{offsetX:0,offsetY:0},{offsetX:0,offsetY:0},{offsetX:0,offsetY:0}],
//       [{offsetX:0,offsetY:0},{offsetX:0,offsetY:0},{offsetX:0,offsetY:0},{offsetX:0,offsetY:0}]
//     ]
//   }
// ]
function createSquare(color,x,y) {
  let el = document.createElement('div')
      el.classList.add('unit')
      el.style.background = color
      el.style.left = 30*x+'px'
      el.style.top = 30*y+'px'
      el.x = x
      el.y = y
      return el
}


class TeriseElment {
  constructor(x,y,nowStatus,elementType) {
    this.basePoint = {x,y}
    this.squareList = [] //小方块集合、
    this.status = [] //所以状态集合
    this.nowStatus = nowStatus
    this.elementType = elementType
  }
  show(parent) {
    for (var i = 0; i < this.squareList.length; i++) {
      parent.appendChild(this.squareList[i])
    }
  }
}
function randomGenerateElement() {
  let elementTypeNum =Math.floor(Math.random()*elementType.length)
  let statusNum = Math.floor(Math.random()*4)
  let colorTypeNum = Math.floor(Math.random()*colorType.length)
  return new elementType[elementTypeNum](5,2,statusNum,colorType[colorTypeNum])
}


function init() {
  initTerise()

  // let timer = setInterval(function () {
    if (nextElement == null) {
      nextElement = randomGenerateElement()
      let newList = []
      for (var i = 0; i < 4; i++) {
        let newElement = nextElement.squareList[i].cloneNode(true)
        newElement.style.top = parseInt(newElement.style.top) - 30 +'px'
        newElement.style.left = parseInt(newElement.style.top) - 120 +'px'
        techris.appendChild(newElement)
      }

    }
    if (dvnamicElment == null) {
      dvnamicElment = nextElement
      nextElement = null
      dvnamicElment.show(techris)
    }
  // },1000)
}


window.onload = function () {

  init()
}
