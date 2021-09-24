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
    ## setState是同步还是异步
    - 1、setstate根源在于合成事件钩子函数 、还是原生事件或者settimeout
    - 2、 合成事件发生的时候，不会直接执行回调函数，（执行自己规定好的更新事件）此时会把isBatching改为true，setstate的作用是存储实例跟对象。
    - 3、 钩子函数（正在执行自己规定好的更新事件）中isBatching为true，setstate的作用是存储实例跟对象。
    - 4、 原生事件跟settimeout 会直接更新页面 
    
      ## 生命周期
    > 旧版本
    - 初始化阶段 --- setup props and state 
    - 挂载阶段 --- componentWillMount ; render ; componentDidMount 
    - 更新阶段 ---(props) componentWillReceiveProps ; shouldComponentUpdate ; componentWillUpdate ; render ; componentDidUpdate \
               ---( states ) shouldComponentUpdate ; componentWillUpdate ; render ; componentDidUpdate 
    - 卸载阶段 --- componentWillUnmount 

    > 新版本
    - 创建时 --- constructor ; getDerivedStateFromProps ; rneder ; componentDidMount
    - 更新时 --- (props)(states) [static]getDerivedStateFromProps ; shouldComponentUpdate ; rneder ; getSnapshotBeforUpdate ; componentDidUpdate \
      --- (forceUpdate) getDerivedStateFromProps  ; rneder ; getSnapshotBeforUpdate ; componentDidUpdate

    - 卸载时 --- componentWillUnmount
    > 一些情况
     - getSnapshotBeforUpdate 需要有返回，值并且同componentDidUpdate 一起使用

    ## 错误边界
        错误边界仍然是一种组件，可以捕获（打印或者其他方式）处理该组件的子组件树任何位置的 JavaScript 错误，并根据需要渲染出备用UI. \
        只有class组件能够成为错误边界组件。错误边界仅可以捕获子组件的错误，无法捕获自身的错误。\
        使用生命周期static getDerivedStateFromError(error) 返回值赋给后面的周期 ； componentDidCatch(error, info)
    ## Fragments
        ```jsx
           <React.Fragment>
             <CompoentA />
                <CompoentB />
                <CompoentC />
           </React.Fragment> 

           <>
             <CompoentA />
                <CompoentB />
                <CompoentC />
           </> 
        ```
    ## 传送门
      Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。 \
      ```jsx
        const someRoot = document.getElementById('someid') //其它节点 || 即操作A组件，希望其它组件出现效果，不依赖redux || 创建了新的一个模块

            class Modal extends React.Component {
            constructor(props) {
                super(props);
                this.el = document.createElement('div');
            }

            componentDidMount() {
                someRoot.appendChild(this.el);
            }

            componentWillUnmount() {
                someRoot.removeChild(this.el);
            }

            render() {
                return ReactDOM.createPortal(
                this.props.children,
                this.el,
                );
            }
            }

      ```
        ## 上下文context

    ```jsx
    import React from 'React'
    import PropTypes from 'prop-types'

    class MiddleComponent extends React.Component {
        render() {
            return <Childcomponent />
        }
    }
    class ParentComponent extends React.Component {
        static childContextTypes = {
            propA: PropTypes.string,
            propB: PropTypes.func
        }
        getChildContext() {
            return {
                 propA: 'propA',
                propB: () => 'hello'   
            }
        }
        render() {
            return <MiddleComponent />
        }
    }

    const instr = 子组件需要通过一个静态属性contextTypes声明后，才能访问父组件Context对象的属性
    class Childcomponent extends React.Component {
        static contextTypes = {
            propA: PropTypes.string,
        }

        render() {

            const { propA } = this.context
            console.log(propA)
            return (

            )
        }
    }
    const instr1 = 无状态组件

    const Childcomponent = (prop, context) => {
        const { propA } = context
    }
    Childcomponent.contextTypes = {
        propA: PropTypes.string
    }

    const instr = 新版本做了调整

    const ThemeContext = react.createContext({
        background: '',
        color: ''
    }) 

    class App extends React.Component {
        render() {
            return (
                <ThemeContext.Provider value={{background: '',color: ''}}> 
                    <Header />
                </ThemeContext.Provider>
            )
        }
    }

    class Header extends React.Component {
        render() {
            const instr = 必须是函数
            return (
                <ThemeContext.Consumer>
                    {context => ( 
                        <h1 style={{background: context.background}}>
                            {this.props.children}
                        </h1>
                    )}
                </ThemeContext.Consumer>
            )
        }
    }

    ```
    ## hook
    ## 性能
    ## react-router-dom
    ## redux
    ## react样式
    ## 第三方
