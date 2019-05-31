class sideBulgeLeftElement extends TeriseElment {
  constructor(x,y,nowStatus,color) {
    super(x,y,nowStatus,sideBulgeLeftElement)
    this.color = color
    this.status = [//四种状态表示每个小单元格的位置
          [{offsetX:0,offsetY:0},{offsetX:0,offsetY:1},{offsetX:0,offsetY:2},{offsetX:1,offsetY:2}],
          [{offsetX:2,offsetY:1},{offsetX:0,offsetY:2},{offsetX:1,offsetY:2},{offsetX:2,offsetY:2}],
          [{offsetX:0,offsetY:0},{offsetX:1,offsetY:0},{offsetX:1,offsetY:1},{offsetX:1,offsetY:2}],
          [{offsetX:0,offsetY:0},{offsetX:1,offsetY:0},{offsetX:2,offsetY:0},{offsetX:0,offsetY:1}]
        ]

        for (var i = 0; i < 4; i++) {
          let temp = createSquare(
            this.color,
            this.basePoint.x+this.status[this.nowStatus][i].offsetX,
            this.basePoint.y+this.status[this.nowStatus][i].offsetY
          )
          this.squareList.push(temp)
        }
  }
}
elementType.push(sideBulgeLeftElement)
