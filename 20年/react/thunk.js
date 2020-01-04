


export default ({getState, dispach}) => next => action => {

  if(typeof action === 'function') {
    return action(dispach, getState)
  }

  next(action)
}
