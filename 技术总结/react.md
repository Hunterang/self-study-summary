## React 知识点汇总

> 为了配合 react 的理念，讲解几个 js 的概念

- 声明式函数，例子如下

```javascript
//目的是找女友
function wantGirlfrend(area) {
  //首先需要寻找目标
  let result = searchGirls(area);

  //接触目标，得到反馈
  let impression = touchResult(result);

  // 判断反馈
  if (impression) {
    let phonenumber = getContact(impression);
    console.log('get number succeess');
  } else {
    wantGrilfrend(otherArea);
  }
}

//从上面的函数，可以知道要达到什么样的目的，实现目的的过程需要怎样做（后续完善功能），以此命名的方式，就是声明式的
```

- 纯函数

```typescript
interface Pures {
    (...any[]) : () => () | any
}

// 此处any 表示返回数据
// 纯函数不会对外部的变量产生影响，正常输入输出
```

- 高阶组件

```typescript
type HighLeverFunction = (arg: React.Component) => React.Component;

//传入一个组件返回一个新的组件
```

## React 基础

- jsx 用 js 表示 dom，这种方式是需要通过 babel 编译转换为真正的 js。

```jsx
let span = <span>hello world</span>;

let helloworld = (prop) => {
  return <div>{prop?.name}</div>;
};
```

- 虚拟 dom

  > 虚拟 dom 是用对象的形式来表示 dom 节点，（个人认为是还未真正生成 dom 的结构，只是描述 dom 结构的对象）
  > 每次都会生成虚拟 dom，并且保存起来，更新的时候与之前的虚拟 dom 进行对比，更新。

- 有状态/无状态

```jsx

 class Nostate extend React.Component {
     constructor(p) {
         super(p)

         this.state = { //是否需要保存状态，由组件本身决定的
             isOk: false
         }
     }
     render() {
         return (
             <div onClick = {() => this.setState({isOk: !this.state.isOk})}>
              {
                  this.state.isOk ?  <span>hello world</span> : no ok
              }
             </div>
         )
     }
 }
```

- 受控组件

> 组件的数据由 react 本身来操作的组件。数据可以通过 props 传递，可以通过 state 决定根据具体场景决定

- 非受控组件
  > 由 Ref 直接访问 dom

```jsx

 class Todo extend React.Component {
     constructor(p) {
         super(p)

         this.input = React.createRef()
         this.handleClick = this.handleClick.bind(this)
     }
     handleClick(e) {
         console.log(this.input.current?.value)
     }
     render() {
         return (
              <div onClick = { this.handleClick  }>
              <input ref={this.input} />
             </div>
         )
     }
 }
```

- ref ref 允许跳过 react 数据直接访问 dom， 由 4 种创建方式

  1、string 创建的方式,该方式 16.3 之前

  ```jsx
  let div = <div ref="div"></div>;
  ```

  2、callBack 创建方式

  ```jsx
  let div = (
    <div
      ref={(el) => {
        this.dom = el;
      }}
    ></div>
  );
  ```

  3、createRef

  ```tsx
   let ref = React.createRef<HTMLDivElement>()

     commponentDidMount() {
         console.log(ref.current?.innerHTML) //只读属性
     }

     React.effect(() => {
         console.log(ref.current?.innerHTML)
     },[])
   let div = <div ref={ref}>hello</div>
  ```

  4、useRef 创建方式

  ```tsx
  let ref = React.useRef<HTMLDivElement>(null);
  React.effect(() => {
    console.log(ref.current?.innerHTML);
  }, []);
  let div = <div ref={ref}></div>;
  ```

  - ref 转发

  ```jsx
     function C (props) {
         return (
             <input placeholder={'我被转发了'}  ref={props.ref}   />
         )
     }
     funciton F () {
         let ref = React.useRef()
          React.effect(() => {
              ref.current?.focus()
          })
         return (
             <div>
                 <C  ref={ref} />
             </div>
         )
     }

  ```

  > 容器组件

  - 容器组件是处理获取数据、订阅 redux 存储等的组件。它们包含展示组件和其他容器组件，但是里面从来没有 html。空 wrap
    > 高阶组件
  - 传入组件 返回一个新组件


    ## Props 和 State
      - Props 是只读属性，传递给组件以呈现UI和状态，我们可以随时间更改组件的输出。
      - state 属于class组件内部状态，每当setState 就会调用render函数，更新ui视图

    ##proptypes
       - 如果项目不需要ts，推荐使用PropTypes进行静态检查。

    ```jsx

        import PropTypes from 'prop-types';

        export const UserDisplay = ({name, address, age}) => {

            UserDisplay.defaultProps = {
                name: 'myname',
                age: 100,
                address: "0000 onestreet"
            };

            return (
                <>
                    <div>
                        <div class="label">Name:</div>
                        <div>{name}</div>
                    </div>
                    <div>
                        <div class="label">Address:</div>
                        <div>{address}</div>
                    </div>
                    <div>
                        <div class="label">Age:</div>
                        <div>{age}</div>
                    </div>
                </>
            )

        }

        UserDisplay.propTypes = {
        name: PropTypes.string.isRequired,
        address: PropTypes.objectOf(PropTypes.string),
        age: PropTypes.number.isRequired
        }

    ```
    ## setState
    ## 生命周期
    ## 错误边界
    ## Fragments
    ## 传送门
    ## 上下文context
    ## hook
    ## 性能
    ## react-router-dom
    ## redux
    ## react样式
    ## 第三方
