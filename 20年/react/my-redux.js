import React from 'react'
/*moni*/
export function createStore(reducer) {
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


const connect = (mapstateToProps, mapstateToTypes) => (Wrapper) => {
  static childContext = {
    store: propTypes.object
  }
  class Newrapper extends React.Components {
    constructor(props, context) {
      super(props, context)
      this.state = {}
    }
    render() {
      return (
        <Wrapper /*如何将参数传递进来*/></Wrapper>
      )
    }
  }
}
