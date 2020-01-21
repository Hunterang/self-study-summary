//hoc
//返回组件的函数，叫做高阶组件，增强组件的功能
const Hoc = W:React.Component => E:React.Component
// for garentee the inner Function won`t be influenced.
//保证之前组件的干净，更加纯粹
const currry = props => wrapper => wrapper(props)
