self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'average':
      var result = calculateAverage(data); // 从数值数组中计算平均值的函数
      self.postMessage(result);
      break;
    default:
      self.postMessage('Unknown command');
  }
}, false);

function calculateAverage(data) {
  let result
  switch (data.cmd) {
    case 'average':
      result = data.data.reduce((a,b) => Number(a)+Number(b))

      break;
    default:
    result = 10

  }
  return result
}
