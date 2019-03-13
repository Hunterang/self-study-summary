<template id="">
  <div class="cpt-room">
    <div class="cpt-top">
      <p class="p-left">机房管理</p>
      <div class="search-right">
        <input v-model='search'
        @keyup.13='submit'
        @blur = 'hiddenL($event)'
        @focus ='showL($event)'>
        <span class="iconfont icon-sousuo"></span>
      </div>
      <div class="icon-right">
        <span class="iconfont icon-jia"></span>
        <span class="iconfont icon-xie"></span>
        <span class="iconfont icon-jiufuqianbaoicon05"
              @click = 'delEle()'></span>
      </div>
    </div>
    <div class="cpt-list">
      <div class="top-left"></div>
      <div class="top-right"></div>
      <div class="bt-left"></div>
      <div class="bt-right"></div>
      <ul>
        <li v-for='item,index in arrx'
        @dblclick='showRoom(item.name)'
        @click='choose($event)'>
          <p>{{item.name}}</p>
          <p>{{item.dis}}</p>
          <p class="iconfont icon-sousuo">暂时不写</p>
        </li>
      </ul>
    </div>
    <transition name='fade'>
      <div class="set_computer_room" v-if='delItem'>
        <dailog @message='delEle'/>
      </div>
      <div class="set_computer_room"
      v-if='activeR' @click='hiidenRoom($event)'>
        <manageR :msg=giveChild
                @recive='hiidenRoom(...arguments)'></manageR>
      </div>
    </transition>
  </div>
</template>
<script type="text/javascript">
import dailog from '@/components/dailog.vue'
import '@/page/main/icon/iconfont.css'
import manageR from '@/components/manageroom.vue'
  export default {
    name: 'CptManege',
    data() {
      return {
        arrs:[
          {name:'机房199',dis: '好2多字'},
            {name:'机房198',dis: '好2多字'},
              {name:'机房197',dis: '好2多字'},
                {name:'机房196',dis: '好2多字'},
                  {name:'机房195',dis: '好2多字'},
                    {name:'机房1949',dis: '好2多字'},
                      {name:'机房193',dis: '好2多字'},
                        {name:'机房192',dis: '好多2字'}
        ],
        search:'',
        delItem: false,
        activeR:false,
        giveChild:''
      }
    },
    computed: {
      arrx() {
        var _this=this
        return this.arrs.filter((val) =>{
          return val.name.indexOf(_this.search) > -1
        })
      }
    },
    components: {
      dailog,
      manageR
    },
    methods: {
      showL(e) {
        e.target.parentNode.style.cssText = 'border:1px solid #5FD8FF;box-shadow: 0 0 20px 1px #5FD8FF'
      },
      hiddenL(e) {
        e.target.parentNode.style.cssText ='border:none;box-shadow:0 0 25px 2px #5FD8FF inset'
      },
      showRoom(item) {
        this.activeR = true
        this.giveChild =item
      },
      delEle (val) {
        this.delItem = !this.delItem
      },
      hiidenRoom(e) {
        e = e || window.event
        e.stopPropagation()
        this.activeR = false
      },
      choose(e) {
        if (!e.currentTarget.mark) {
          e.currentTarget.style.color = '#ff5f5f'
          e.currentTarget.style.border = '1px solid #ff5f5f'
          e.currentTarget.mark = true
        }else {
          e.currentTarget.mark = null
          e.currentTarget.style.color = ''
          e.currentTarget.style.border = ''
        }
      }
    }
  }
</script>
<style type='text/css' scoped>
  .cpt-room {
    width: 100%;
    height: 100%;
    color: #aaa;
  }
  .icon-right {
    height: 40px;
    box-sizing: border-box;
    padding-left: 5%;
    display: flex;
    justify-content: space-between;
  }
  .icon-right .iconfont {
    font-size: 22px;
    font-weight: 600;
    line-height: 40px;
    color: #abcdef;
  }
  .cpt-top {
    padding: 0 5%;
    display: flex;
    align-items: center;
    height: 10%;
    background: linear-gradient(to bottom, rgba(0,128,197,.6) 4%, rgba(0,74,149,0.0) 97%);
  }
  .cpt-top p{
    text-align:left;
    flex:1;
    flex-shrink: 1;
    font-size: 20px;
    color: #ccc;
  }
  p.p-left {
    font-weight: bold;
  }
  .cpt-top .icon-right {
    width: 15%;
  }
  .search-right {
    font-size: 0;
    width: 18%;
    display: flex;
    box-sizing: border-box;
    align-items: stretch;
    height: 40px;
    box-shadow:  0 0 25px 2px #5FD8FF inset;
    border-radius: 6px;
  }
  .search-right input {
    background: none;
    border: none;
    outline: none;
    text-indent: 10px;
    color:#aaa;
    flex-shrink: 1;
    flex: 1;
  }
  .search-right span {
    width: 40px;
    text-align: center;
    font-size: 20px;
    line-height: 40px;
  }
  .cpt-list {
    height: 90%;
    position: relative;
    padding: 0 5%;
    box-sizing: border-box;
    box-shadow:  0 0 25px 2px #5FD8FF inset;
  }
  .cpt-list li {
    cursor: pointer;
  }
  .top-left,
  .top-right,
  .bt-left,
  .bt-right {
    position: absolute;
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    /* border: 1px solid #5FD8FF; */
  }
  .top-left {
    top: -1.5px;
    left: -1.5px;
    border-top: 3px solid #5FD8FF;
    border-left: 3px solid #5FD8FF;
    border-top-left-radius: 4px;
  }
  .top-right {
    top: -1.5px;
    right: -1.5px;
    border-top: 3px solid #5FD8FF;
    border-right: 3px solid #5FD8FF;
    border-top-right-radius: 4px;
  }
  .bt-left {
    bottom: -1.5px;
    left: -1.5px;
    border-bottom: 3px solid #5FD8FF;
    border-left: 3px solid #5FD8FF;
    border-bottom-left-radius: 4px;
  }
  .bt-right {
    bottom: -1.5px;
    right: -1.5px;
    border-bottom: 3px solid #5FD8FF;
    border-right: 3px solid #5FD8FF;
    border-bottom-right-radius: 4px;
  }
  .cpt-list ul {
    height: 100%;
    list-style: none;
  }
  .cpt-list ul li {
    transition: .3s;
    box-sizing: border-box;
    border-radius: 6px;
    text-align: center;
    color: #aaa;
    width: 22.5%;
    margin-left: 2%;
    margin-top: 1.5%;
    /* box-shadow:  0 0 25px 2px #5FD8FF inset; */
    border: 1px solid rgba(95,216,255,.8);
    float: left;
    height: 46%;
  }
  .cpt-list ul li p {
    padding-top: 20px;
  }
  .cpt-top input {

  }
  .set_computer_room {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.6);
    /* opacity: 0.2; */
  }
  .fade-enter-active,.fade-leave-active {
    transition: .3s;
  }
  .fade-enter,.fade-leave-to {
    opacity: 0;
  }
</style>
