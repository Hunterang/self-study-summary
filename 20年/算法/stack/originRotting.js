/**
*2020/3/4
*/

function originRotting(grid) {
  let n=0
  function rotting() {
    let willgetBad = [],haseFresh = false
    for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid[i].length; j++) {
        if(grid[i][j] === 0){
          continue
        }
        if(grid[i][j] === 1){
          haseFresh = true
          continue
        }
        if(grid[i][j] === 2){
          if(grid[i-1] && grid[i-1][j] === 1) {
            willgetBad.push([i-1, j])
            grid[i-1][j] = 1.5
          }
          if(grid[i+1] && grid[i+1][j] === 1) {
            willgetBad.push([i+1, j])
            grid[i+1][j] = 1.5
          }
          if(grid[i][j-1] && grid[i][j-1] === 1) {
            willgetBad.push([i, j-1])
            grid[i][j-1] = 1.5
          }
          if(grid[i][j+1] && grid[i][j+1] === 1) {
            willgetBad.push([i, j+1])
            grid[i][j+1] = 1.5
          }
        }
      }
    }
    if (willgetBad.length === 0) {
      n = haseFresh? -1 : n
      return
    }
    for (var i = 0; i < willgetBad.length; i++) {
      var actor = willgetBad[i]
      grid[actor[0]][actor[1]] = 2
    }
    n +=1
    rotting()
  }
  rotting()
  return n
}
originRotting(
[[2,1,1],[1,1,0],[0,1,1]])
