import React from 'react'
import PropTypes from 'prop-types'//需要下载仅仅作为校验使用
import bindActionCreators from './my-react'

export const connect = (mapstateToProps = state => state, mapDispatchToProps = {}) => (WarpComponent) => {
  return class ConnectComponent extends React.Component {
    static contextType = {
      store: propTypes.object
    }
    constructor(props, context) {
      super(props, context)
      this.state = {
        props: {}
      }
    }
    componentDidMount() {
      const { store } = this.context
      store.subscribe(this.update)//订阅更新？
      this.update()
    }
    update() {
      const { store } = this.context
      const stateProps = mapstateToProps(store.getState())//mapstate可以灵活操作state
      const dispachProps = bindActionCreators(mapDispatchToProps)
      this.setState({//相当于刷新了两边？第一遍没有全局数据的，第二遍有了store中的数据
                      //为什么不再constructor阶段实现呢？
        props: {
          ...stateProps,//将想要的状态绑定到相应的属性上
          ...this.state.props, //此处尚存疑问的地方
          ...dispachProps
        }
      })
    }
    render() {
      return <WarpComponent {...this.state.props}></WarpComponent>
    }
  }
}

export class Provider extends React.Components {
  static childContextTypes = {
    store: PropTypes.Objects//对全局需要强校验
  }
  getChildContext() {//将数据挂到全局去context上
    return {
      store: this.store
    }
    /*理解不够深刻啊,明天完善*/
  }
  constructor(props, context) {
    super(props, context)
    this.store = props.store
  }
  render() {
    return (
      this.props.children
    )
  }
}
