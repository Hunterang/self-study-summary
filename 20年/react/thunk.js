


export default ({getState, dispach}) => next => action => {
  //在applymiddleware中仅仅执行2层，生成新的dispatch
  //执行之后类似于 dispatch = (action) => {下面的内容}
  //个人理解中间的next纯粹多余，因为 dispatch === next、、而且没有必要分开传递多那一个箭头函数
  if(typeof action === 'function') {
    return action(dispach, getState)
  }

  next(action)
}
