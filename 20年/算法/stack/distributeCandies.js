/*
*2020/3/5
*/
const link = 'https://leetcode-cn.com/problems/distribute-candies-to-people/'
var distributeCandies = function(candies, num_people) {
  let candiesArray = Array(num_people).fill(0)
  while (candies) {
    let n = 0
    for (var i = 0; i < num_people; i++) {
      let reduce = n*num_people + i + 1
      if(candies > reduce) {
        candies -= reduce
        candiesArray[i] += n*num_people + i + 1
      }else {
        candies = 0
        candiesArray[i] +=candies
        break
      }
    }
    n++
  }
  return candiesArray
}
console.log(distributeCandies(10,3));
console.log(distributeCandies(7,4));
