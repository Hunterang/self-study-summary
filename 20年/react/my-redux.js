import React from 'react'
/*moni*/
export function createStore(reducer, enhancer) {
  if(enhancer) {
    return enhancer(createStore)(reducer)
  }
  let state = {}
  let wathers = []
  function getState() {
    return state
  }
  function subscribe(fn) {
    this.wathers.push(fn)
  }
  function dispatch(state) {
    state = reducer('',state)//状态更新触发页面更新
    watchers.forEach( f => f())

  }
  dispatch({type: '@@react-redux|init'})
  return { getState, subscribe, dispatch}
}

function applyMiddleware(middleware) {
  //这个就是enhancer
  //作用就是为了重构actions
  return createStore=> (...args) => {
    let store = createStore(...args)
    //执行store
    let dispatch = store.dispatch
    const mid = {
      getState: store.getState,
      dispatch: (...args) => dispach(...args)//参数就是实际上需要的reducer'
    }
    dispach = middleware(mid)(store.dispach)//这里是chunk，生成新的dispatch
    return {
      ...store,
      dispach//dispatch覆盖之前的dispatch
    }
  }
}


function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}
export bindActionCreators(creators, dispatch) {
  // let bound = {}
  // Object.keys(creators).forEach(key => {
  //   let creator = creators[key]
  //   let bound[key] = bindActionCreator(creator, dispatch)
  // })
  // return bound
  Object.keys(creators).reduce((res, item) => {
    res[item] = bindActionCreator(creators[item], dispatch)
    return res
  }, {})
}


// const connect = (mapstateToProps, mapstateToTypes) => (Wrapper) => {
//   static childContext = {
//     store: propTypes.object
//   }
//   class Newrapper extends React.Components {
//     constructor(props, context) {
//       super(props, context)
//       this.state = {}
//     }
//     render() {
//       return (
//         <Wrapper /*如何将参数传递进来*/></Wrapper>
//       )
//     }
  }
}
