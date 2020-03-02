### react lifecircle

# 初始阶段
```javascript
 initial() //即constructor
 static getDerivedStatefromProps()
 render()
 componentDidMount()
```
#更新阶段
```javascript
static getDerivedStatefromProps()
shuldComponentUpdate()
render()
getSnapShotbeforeUpdate()
componentDidUpdate()
```
#结束阶段
```javascript
componetWillUnMount()
```

>react context
>>一些用法
```javascript
  const reactContext = React.creactContext(pramaryValue)
  class Nav extends Component {
    render() {
      <reactContext.Provider value={something}>
      //此处value传入进入之后context默认数据就会更改为sometiong
        {this.props.children}
      </reactContext.Provider>
    }
  }
  Nav.item = NavItem
  NavItem.contextType = reactContext  

  export default Nav
```
###jsx

>jsx 就是js+xml的结合
>> jsx需要babel编译，才能正确转为js语法
>>jsx经过转义的结果是React.creactDom('el',{data}, child)
