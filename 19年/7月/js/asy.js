let promise1 = Promise.resolve('123')
Promise.resolve('456').then(_ => console.log(_))
async function wait() {
  promise1.then(_ => console.log(_))
  console.log('why');
  let res = await promise1
  console.log(res+'love');
}
wait()
console.log('hi');
