import React from 'react'
import propTypes from 'prop-types'//需要下载


export class Provider extends React.Components {
  static childContextProps = {
    store: propTypes.Object
  }
  getChildContext() {
    return /*理解不够深刻啊,明天完善*/ 
  }
  render() {
    return (
      this.props.child
    )
  }
}
