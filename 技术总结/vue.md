## vue 基础总结
 > mvvm 模型，数据单项流，数据驱动视图

  - Object.defineproperty 是双向绑定的核心，以下为极简版

  ```javascript

  let input = this.$refs.input

  let msg = {
      data: 'hello world'
  }
  //此处比较关键;如果直接返回msg.data会造成递归现象
  let res = msg.data

  let opt = {
      get() {
          return res
      },
      set(val) {
          res = val
          //赋值是由事件完成的
          input.value = val
      }
  }  
  //数据收集到了
  Object.defineProperty(msg, 'data', opt)

  input.value = msg.data //首次赋值触发get事件，可以在此处将依赖进行收集

  input.oninput = function (e) {
      msg.data = e.targe.value //此处触发了 set方法，修改的是对象
  } 

  ```

  ## vue指令

   - v-model  
    > 本质是  props: ['value], this.$emit('inpput')

   - v-html, v-text,v-for ,v-if, v-show， v-once
   > v-for 的优先级高于v-if \
   > v-if 节点增删 v-show 节点隐藏跟显示

   - v-pre 表示没有指令（很少用到）v-cloak 不回出现花括号

 ## vue 修饰符
    - .trim, .prevent , .number(不好用) 还有一些键盘的 
    - .sync
      > msg.sync='res' 等价于 :msg='res' @update:msg = (bool) => res = bool ; 子组件中 props: ['msg']  this.$emit('update:msg', bool) 

 ## computed && $watch
    > 1、  computed 是vue收集到的依赖，根据computed中存在的data中的数据变化而变化 \
    > 2、  $watch 监听依赖的变化，当依赖的数据变化时，进行响应的操作。可以监听 'msg.a', 有deep深度监听的情况。

 ## 生命周期
    > 没有太多讲解的意义。主要说一下，父子更新的情况。父create(执行render函数，发现了子) -> 子生命周期（再发现子就会递归）,到mounted-> 父mounted

 ## Mixin混入
   > data computed methods混入 实际组件中存在就不再混入了
   > 钩子函数混入 存成数组，首先执行混入的钩子，再执行组件的钩子

 ## vue静态方法
   - 1、 component方法，注册组件
   ```javascript
   //全局注册
    Vue.component('ComponentName', {
        data() {
            return {
                name : 'ComponentName'
            }
        },
        template: `<div>${name}</div>`
    })
    //组件内部注册
    let a = {
        components : {
            ComponentName: {
                data() {
                    return {
                        name : 'ComponentName'
                    }
                },
                template: `<div>${name}</div>`
            }
        }
    }
   ```

    - 2、 directive 注册指令
   ```javascript 

    Vue.directive('directiveName', {
        bind(el, binding, vnode) {},//可以直接获取到el,binding可以传入大量参数
        insert(el) {},
        update() {},
        componentUpdated() {}
        unbind() {},
    })
    //用法 v-directiveName:foo.a.b = 'binding'
   ```

      - 2、 extend 继承,返回一个新的组件
   ```javascript 
     import App from `./app`

     let Apps = Vue.extend(App) //继承所有的app的状态，并且内置，间接继承了Vue，生成了新的constructor（构造函数）


     function globalMsg(opt) {
         let vm = new Apps({
             data() {//数据将会被合并
                 return {
                     ...opt
                 }
             }
         }).$mount()

         let dom = vm.$el
     }




   ```

  
