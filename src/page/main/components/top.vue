<template id="">
  <div class="header">
    <div class="top">
      <div class="left">
          {{theme}}
      </div>
      <div class="center">
        <ul class="center-ul">
          <li v-for='itemx,index in mainNames'
                @click='pathJump(index,router)'
                :class="[index == aindex ? active: '']">
            <div class="skew">{{itemx}}</div>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul class="right-ul" @click=''>
          <li :class="icons[3]"></li>
          <li :class="icons[2]"></li>
          <li :class="icons[1]"></li>
          <li :class="icons[0]"></li>
          <li >
            <div class="appear">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="lower">
      <div class="arrow-left">
        <span class="iconfont icon-shuangjiantouzuo"></span>
      </div>
      <div class="lower-center">
        <ul>
          <li v-for='item,index in secondNames'
          @click=pathJump(index,sencondRouter)
          :class='[index==bindex?activeLi:""]'>{{item}}</li>
          <!-- <li class="activeLi">我的机房首页</li>
          <li>广州机房</li>
          <li>智能统计管理</li>
          <li>机房管理 </li>
          <li>视频管理</li> -->
        </ul>
      </div>
      <div class="arrow-right">
        <span class="iconfont icon-shuangjiantouyou"></span>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import '../icon/iconfont.css'
export default {
  name: 'top',
  data () {
    return {
      theme: 'OURSPEED',
      router: [{'name': 'contents'},{'name': 'map'},{'name': 'map'},{'name': 'contents'}],
      sencondRouter:[
        {'name': 'computManege'},
        {'name': 'computManege'},
        {'name': 'personManege',
          params: {
            id: '人员管理'
          }
        },
        {'name': 'computManege'},
        {'name': 'vedioManage',
          params: {
            id: '视频管理'
          }
        }
      ],
      mainNames: ['总览','智能管理','系统管理','系统安全'],
      secondNames: ['我的机房首页','广州机房','人员管理','机房管理','视频管理'],
      aindex: 0,
      bindex: 0,
      active: 'sk-border',
      activeLi: 'activeLi',
      icons: ['iconfont icon-tixing','iconfont icon-youjian','iconfont icon-002dianhua','iconfont icon-sousuo']
    }
  },
  methods: {
    pathJump(num,arr=[]) {
     arr.length == 4 ? (this.aindex=num) : (this.bindex=num)
      this.$router.push(arr[num])
    }
  }
}
</script>
<style style='text/css' scoped>
  .iconfont {
    font-size: 20px;
  }
  .header {
    width: 100%;
    height: 100%;
    font-family: "PingFang SC";
    color: #fff;
  }
  .top {
    box-sizing: border-box;
    height: 60%;
    width: 100%;
    padding: 10px 4%;
    background: linear-gradient(to bottom,#456789 4%, rgba(0,74,149,0.00) 97%);
  }
  .left {
    float: left;
    width: 10%;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 23px;
    font-weight: bold;
    overflow: hidden;
    /* white-space: nowrap;
    text-overflow: ellipsis; */
  }
  .center {
    margin-left: 30px;
    float: left;
    height: 100%;
    width: 44%;
  }
  .center-ul {
    display: block;
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
  }
  .center-ul li {
    cursor: pointer;
    float: left;
    flex: 1;
    box-sizing: border-box;
    height: 40px;
    transform: skewX(-30deg);
    line-height: 40px;
  }
  .skew {
    height: 100%;
    transform: skewX(30deg);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sk-border {
    opacity: 1;
    transition: .6s;
    border-radius: 4px;
    box-shadow : 0 0 20px 1px #5FD8FF inset;
  }
  .right {
    width: 25%;
    height: 100%;
    float: right;
  }
  .right-ul {
    width: 80%;
    display: flex;
    float: right;
    list-style: none;
    height: 100%;
    align-items: center;
  }
  .right-ul .iconfont {
    font-size: 25px;
    cursor: pointer;
  }
  .right-ul li {
    flex: 1;
    float: right;
    /* margin-right: 20px; */
  }
  .right-ul li:last-child {
    display: flex;
    justify-content: center;
  }
  .appear {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background: #fff;
  }
  .lower {
    height: 40%;
    width: 100%;
  }
  .lower .iconfont {
    font-size: 14px;
  }
  .arrow-left,
  .arrow-right {
    box-sizing: border-box;
    padding-top: 8px;
    height: 40px;
    width: 30px;
    background-color: rgba(255,255,255,.2);
  }
  .arrow-left {
    float: left;
  }
  .arrow-right {
    float: right;
    text-align: right;
    padding-right: 5px;
  }
  /* .arrow-right span {
    float: right;
  } */
  .lower-center {
    float: left;
    width: 56%;
    height: 100%;
    margin-left: 30px;
  }
  .lower-center ul {
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    align-items: center;
  }
  .lower-center ul li:first-child {
    margin: 0px;
  }
  .lower-center ul li {
    flex: 1;
    font-size: 14px;
    text-align: left;
    box-sizing: border-box;
    height: 30px;
    padding: 5px 0 5px 10px;
    border-radius: 20px;
    line-height: 20px;
    margin-left: 20px;
    background-color: rgba(255,255,255,.2);
    box-shadow: 0 0 1px 1px rgba(255,255,255,.3);
    overflow: hidden;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .activeLi {
    background-color: #15A1F0 !important;
  }
</style>
