import {fetch} from '@/ut/fetch.js'

var PERSON_LIST = [
  {name: '赵先生',position: '机房管理员'},
  {name: '钱先生',position: '机房管理员'},
  {name: '孙先生',position: '机房管理员'},
  {name: '李先生',position: 'ssssss'},
  {name: '周先生',position: '机房管理员'}
]

const self = {

  state: {//状态
    currentManage: '',
    vedio: {
      head: '视频监控',
      vedioName: '视频名称',
      ip: 'IP地址',
      belong: '所属机房',
      belongArr: ['广州机房','上海机房','深圳机房','沈阳机房','北京机房']
    },
    manager: {
      head: '用户管理',
      userName: '用户名',
      userPass: '密码',
      belong: '机房管理',
      belongArr: ['广州机房','上海机房','深圳机房','沈阳机房','北京机房']
    },
    personList:[],
    vedioList:[]
  },
  mutations: {//修改state
    changeManage(state,val) {
      state.currentManage = val
    },
    changePersonList(state,val) {
      state.personList = val
    }
  },
  actions: {//一班异步操作在这里，可以触发，mutation。。。commit()进行修改
    getPersonList({commit}) {
    //   fetch('localhost/icon/token',{
    //     id: 'xx'
    //   }).then(res=>{
    //     commit('changePersonList',res)
    //   })
    // }
        new Promise((resolve,reject) =>{
          var personList;
          setTimeout(()=>{
            personList = PERSON_LIST//拿到数据了
            resolve(personList)
            commit('changePersonList',personList)
          })
        })
      }
  },
  getters: {
    getVedioMsg: state => state.vedio,
    getManagerMsg: state => state.manager,
    getpersonList: state => state.personList
  }
}

export default self
