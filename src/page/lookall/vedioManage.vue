<template id="">
  <div class="cpt-room">
    <div class="cpt-top">
      <p class="p-left">{{this.$route.params.id}}</p>
      <div class="search-right">
        <input v-model='search'
        @keyup.13='submit'
        @blur = 'hiddenL($event)'
        @focus ='showL($event)'>
        <span class="iconfont icon-sousuo"></span>
      </div>
      <div class="icon-right">
        <span class="iconfont icon-jia" @click='addVedio()'></span>
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
      <ul v-show = 'this.$route.params.id == "视频管理"'>
        <li v-for='item,index in arrx'
            @click = 'choose($event)'
            @dblclick='showRoom(item)'>
          <img :src='item.img'>
          <!-- <img src="@/images/123.png" alt="" width="100%"> -->
          <p>{{item.name}}</p>
          <p>{{item.dis}}</p>
        </li>
      </ul>
      <ul v-show = 'this.$route.params.id == "人员管理"'>
        <li v-for='item,index in textLists'
            @click = 'choose($event)'>
            <p>{{item.name}}</p>
            <p>{{item.position}}</p>
            <!-- <p>{{item.position}}</p> -->
        </li>
      </ul>
    </div>
    <transition name='fade'>
      <div class="add_vedio_manage"
            v-if='alerT'>
            <div class="show_dailog" v-if= 'delV'>
              <dailog @message = 'desisonF'/>
            </div>
            <addList  v-if='addV'
                      @recieve='inVisible'
                      msg ='vedio'/>
      </div>
      <div class="set_computer_room"
      v-if='activeR' >
      <div :style="{backgroundImage:'url('+bigUrl+')'}" class='show_big'>
        <div class="top-left"></div>
        <div class="top-right"></div>
        <div class="bt-left"></div>
        <div class="bt-right"></div>
        <div class="border" @click='hiidenRoom($event,"activeR")'>
          <span class="del_x">X</span>
        </div>
        <div class="bottom_words">
          <span>{{title}}</span><span>{{date}}</span>
        </div>
      </div>
        <!-- <manageR :msg=giveChild
                @recive='hiidenRoom(...arguments)'></manageR> -->
      </div>
    </transition>
    <!-- <div class="dialog">

    </div> -->
  </div>
</template>
<script type="text/javascript">
import addList from '@/components/addlist.vue'
import  dailog from '@/components/dailog.vue'
import '@/page/main/icon/iconfont.css'
import manageR from '@/components/manageroom.vue'
  export default {
    name: 'CptManege',
    data() {
      return {
        arrs:[
          {name:'机房199',dis: '9527',img:'./static/123.png'},
            {name:'机房198',dis: '9527',img:'./static/123.png'},
              {name:'机房197',dis: '9527',img:'./static/123.png'},
                {name:'机房196',dis: '9527',img:'./static/123.png'},
        ],
        active:'act',
        search:'',
        chooseArr: [],
        alerT: false,
        delV: false,
        activeR:false,
        addV: false,
        giveChild:'',
        bigUrl:'',
        textList:[],
        title: '',
        date:null
      }
    },
    created() {
      if (this.$store.getters.getpersonList.length == 0) {
        this.$store.dispatch('getPersonList')
      }

    },
    mounted() {
    },
    computed: {
      arrx() {
        var _this=this
        return this.arrs.filter((val) =>{
          return val.name.indexOf(_this.search) > -1
        })
      },
      textLists() {
        var _this=this
        return this.$store.getters.getpersonList.filter((val) =>{
          return val.name.indexOf(_this.search) > -1
        })
      }
    },
    components: {
      manageR,
      dailog,
      addList
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
        this.giveChild = item.name
        this.bigUrl = item.img
        this.title = item.name
        this.date = new Date().toLocaleDateString()
      },
      hiidenRoom(e=window.event,key) {
        e.stopPropagation();
        this[key] = false
        this.addV = this.addV == true ? false : this.addV
        this.delV = this.delV == true ? false : this.delV
      },
      inVisible(val) {
        this.hiidenRoom(window.event,val)
      },
      addVedio() {
        this.alerT = true
        this.addV = true
      },
      choose(e) {
        var dom = e.currentTarget
        dom.lock = dom.lock ? (!dom.lock) : true;
        if (dom.lock) {
          dom.style.border = '1px solid #FF5F5F'
          dom.style.color = 'rgba(255,95,95,.5)'
        }else {
          dom.style.border = ''
          dom.style.color = ''
        }
      },
      delEle() {

      },
      desisonF(val) {
        var _this =this
        if (val == true) {
          this.chooseArr.reverse().forEach((val,index) => {
              _this.arrx.splice(val,1)
          })
          var arrE = this.$refs
          Object.keys(arrE).forEach( (val,index) => {
            if (arrE[val].length!=0) {
              arrE[val][0].lock = false
              arrE[val][0].style.border = ''
              arrE[val][0].style.color = ''
            }else {
              // delete arrE[val]
            }
          })
        }
        this.alerT = false
        this.delV = false
      }
    }
  }
</script>
<style type='text/css' scoped>
.act {
  background: #c7000a;
}
li img {
  width: 100%;
  height: 90%;
}
  .cpt-room {
    width: 100%;
    height: 100%;
    color: #ccc;
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
    cursor: pointer;
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
    padding: 5px;
    cursor: pointer;
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
    float: left;
    margin-left: 10px;
    height: 30px;
    line-height: 30px;
  }
  .cpt-top input {

  }
  .add_vedio_manage,
  .set_computer_room {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.8);
    /* opacity: 0.2; */
  }
  .fade-enter-active,.fade-leave-active {
    transition: .3s;
  }
  .fade-enter,.fade-leave-to {
    opacity: 0;
  }
  /* .show_dailog {
    width: 350px;
    height: 200px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -175px;
    margin-top: -180px;

  } */
  .show_big {
    /* border: 1px solid #5FD8FF; */
    width: 80%;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index:999;
    margin-left: -40%;
    margin-top: -300px;
    background-size: 100% 100%;
  }
  .show_big .top-left {
    top: -10px;
    left: -10px;
  }
  .show_big .top-right {
    top: -10px;
    right: -10px;
  }
  .show_big .bt-left {
    bottom: -10px;
    left: -10px;
  }
  .show_big .bt-right {
    bottom: -10px;
    right: -10px;
  }
  .border {
    z-index: 9999;
    position: absolute;
    border: 30px solid #000;
    border-left:30px solid transparent;
    border-bottom: 30px solid transparent;
    top: 0;
    right: 0;
    cursor: pointer;
  }
  .del_x {
    display: inline-block;
    position: absolute;
    top: -20px;
    right: -20px;
    color: #5FD8FF;
  }
  .bottom_words {
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    position: absolute;
    bottom: 0;
    justify-content: space-between;
    padding:10px 5%;
    background: rgba(0,0,0,.6);
    color: #fff;
  }
  .show_head {
    border: 1px solid #5FD8FF;
    position: absolute;
    top: -18%;
    left: 50%;
    width: 300px;
    height: 60px;
    font-size: 22px;
    line-height: 60px;
    margin-left: -150px;
    text-align: center;
    color: #fff;
    box-shadow:  0 0 25px 2px #5FD8FF inset;
  }
  .outer_x {
    width: 22px;
    height: 22px;
    position: absolute;
    top: -18%;
    border: 1px solid #5FD8FF;
    color: #5FD8FF;
    text-align: center;
    font-weight: bold;
    line-height: 22px;
    cursor: pointer;
    right: 0;
  }
  .vedio_magnage_left,
  .vedio_magnage_center,
  .vedio_magnage_right {
    padding-top: 5%;
    float: left;
    box-sizing: border-box;
    width: 41%;
    height: 100%;
    border: 1px solid #5FD8FF;
    box-shadow:  0 0 25px 2px #5FD8FF inset;
  }
  .vedio_magnage_right {
    width:18%;
  }
  .vedio_magnage_center p {
    margin-left: 10%;
  }
  .vedio_magnage_center ul {
    width: 80%;
    margin: 0 auto;
    list-style: none;
  }
  .vedio_magnage_center ul li {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }
  .left_wrap {
    font-weight: bold;
    width: 80%;
    margin: 0 auto;
  }
  .ipt_wrap {
    margin: 30px 0;
    height: 50px;
    border: 1px solid #5FD8FF;
    border-radius: 8px;
  }
  .ipt_wrap input{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    text-indent: 15px;
    color: #fff;
    box-shadow:  0 0 25px 2px #5FD8FF inset;
  }
  .ul_wrap {
    width: 80%;
    margin-left: 10%;
    margin-top: 30px;
    border: 1px solid #5FD8FF;
    height: 80%;
    border-radius: 8px;
    font-size: 14px;
    box-shadow:  0 0 25px 2px #5FD8FF inset;
  }
  p {
    font-weight: bold;
  }
  .reset,
  .store {
    width: 80%;
    height: 40px;
    line-height: 40px;
    margin: 0 auto 20px;
    font-size: 12px;
    text-align: center;
    font-weight: 400;
    border-radius: 2px;
    background: linear-gradient(to bottom, #15A1F0 0%, #0085CA 100%);
  }
</style>
