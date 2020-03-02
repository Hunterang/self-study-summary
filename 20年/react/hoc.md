#对高阶组件的理解
### 为了让组建增加相应的功能，最好是单一化的方式来处理，不断强化组件
```javascript
  function Toggle(Wrapped) {
    return class extends Component {
      state = {isShow: false}
      handleClick = () => {
        this.setState({
          isShow: !this.state.isShow

        })
      }
    }
  }
  @Toggle
  class LoginOut extends Component {
    render() {
      return (
        <div
          onClick = {this.props.handleClick}
          style = {{display: this.props.isShow? 'block': 'none'}}
        >
        </div>
      )
    }
  }
```
