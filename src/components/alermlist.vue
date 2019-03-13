<template id="">
  <div class="alerm-list">
    <div class="click-list">
      <div class="alerm-sign">
        告警项列表
      </div>
      <div class="jump-page">
        <ul v-if='page>2'>
          <li @click='jump(0)' ><span class="iconfont icon-zuoshuangjiantou"></span><span>上一页</span></li>
          <li v-for='n in page' @click='jump(n)' :class="{active:n == currentpg}"><span>{{n}}</span</li>
          <li  @click='jump(-1)'><span>下一页</span><span class="iconfont icon-youshuangjiantou"></span></li>
        </ul>
      </div>
    </div>
    <table cellspacing='0' border='0' class='alerm-table' >
      <thead class="grediant-color">
        <tr>
          <th>#</th>
          <th>位置/类型</th>
          <th>传感器名称</th>
          <th>报警时间</th>
          <th>异常信息</th>
          <th>状态</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for='value,index in data' :style="{display:Math.ceil((index+1)/10) == currentpg ?'':none}">
          <td>{{index+1}}</td>
          <td>{{value.Name}}</td>
          <td>{{value.DisplayName}}</td>
          <td>{{value.AlarmTime}}</td>
          <td>{{value.Message}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script type="text/javascript">
import {table} from '../ut/table.js'
import {fetch,split} from '@/ut/fetch.js'
import '@/page/main/icon/iconfont.css'
  export default {
    name: 'alermlist',
    data () {
      return {
        data:[],
        domel: document.querySelector('div'),
        none: 'none',
        page: '',
        // show : isActive()
        currentpg: 1
      }
    },
    computed: {
      pg () {
        return Number(currentpg-1);
      }
    },
    created () {
      this.getData('http://localhost/speed/token.php',{
        requst:"LastestAlarm"})
    },
    mounted () {
      // var domul= document.querySelector('.jump-page ul')
      // this.getData('http://localhost/speed/token.php',{
      //   requst:"LastestAlarm"},domul)
    },
    methods: {
      getData (url,params) {
        var _this =this
        fetch(url,params)
        .then((val)=>{
          _this.data =val.data
          _this.page =Math.ceil((val.data.length)/10);
        })
      },
      jump (num) {
        switch (num) {
          case 0:
                  if (this.currentpg == 1) {
                    return
                  }else {
                    this.currentpg --
                  }
                  break;
          case -1:
                  if (this.currentpg == this.page) {
                  }else {
                    this.currentpg ++
                  }
                  break;
          default:
                    this.currentpg = num

        }
      },
      isActive (index) {
        if (this.currentpg*9<=index && (this.currentpg-1)*9>=index) {
          return true
        }
        return false
      }
    }
  }
</script>
<style type='text/css' scoped>
  .alerm-list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: #fff;
  }
  .click-list {
    height: 15%;
  }
  .alerm-table {
    overflow: hidden;
    width: 100%;
    height: 85%;
    color: #fff;
    font-weight: lighter;
    text-align: center;
  }
  .alerm-table tbody tr td{
    padding: 0;
  }
  .grediant-color tr{
    /* opacity: 0.6; */
    background: linear-gradient(to bottom, rgba(0,128,197,.6) 4%, rgba(0,74,149,0.0) 97%);
    height: 50px;
  }
  .alerm-sign {
    line-height: 40px;
    height: 40px;
    float: left;
    font-size: 20px;
  }
  .jump-page {
    height: 40px;
    float: right;
  }
  .jump-page ul {
    list-style:none;
  }
  .jump-page>ul>li {
    float: left;
    padding:  5px 10px;
    margin-right: 10px;
    cursor: pointer;
    transform:skewX(-30deg);
    border-radius: 2px;
    border: 1px solid #5FD8FF;
    box-shadow: 0 0 5px 1px #5FD8FF inset;
  }
  .sk-border {
    border-radius: 2px;
    border: 1px solid #5FD8FF;
    box-shadow: 0 0 10px 1px #5FD8FF inset;
  }
  .jump-page ul li span {
    display: inline-block;
    transform: skewX(30deg);
  }
  .active {
    background: #5FD8FF;
    color : #000;
  }
</style>
