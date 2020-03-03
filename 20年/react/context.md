###context的使用
```javascript
 //父组件
 import propTypes from 'prop-types'
 class F extends Component {
   static childContextTypes = {
     store: propTypes.object//定义store属性
   }
   getChildContext() {
     return this.props.store//给context属性赋值
   }
   render() {
     return (
       <>
        yes
       <>
     )
   }
 }

 //隔代组件或者子组件
  import propTypes from 'prop-types'
 class UseContext extends Component {
   static contextTypes = {
     store: propTypes.object
   }
   render() {
     <>
      {this.context.store.value}
     </>
   }
 }
```
