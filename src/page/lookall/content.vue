<template id="">
  <div class="contents">
    <div class="top">
      <div class="left">
        <div class="top-left"></div>
        <div class="top-right"></div>
        <div class="bt-left"></div>
        <div class="bt-right"></div>
        <div class="sensor-overlook">
          <p>{{word.name}}</p>
          <div class="stretch">
            <span class="text-left">{{word.sensorNum}}</span>
            <span class="text-right">{{data.sensorCount}}</span>
          </div>
          <div class="stretch">
            <span class="text-left">{{word.nomalNum}}</span>
            <span class="text-right">{{data.nomalSensor}}</span>
          </div>
          <canvas class="canvas-bar" data-id='1' height="6"></canvas>
          <div class="stretch">
            <span class="text-left">{{word.abnomal}}</span>
            <span class="text-right">{{data.currentAlarm}}</span>
          </div>
          <canvas class="canvas-bar" width="" height="6"></canvas>
        </div>
      </div>
      <div class="center">
        <div class="top-left"></div>
        <div class="top-right"></div>
        <div class="bt-left"></div>
        <div class="bt-right"></div>
        <div class="risk-eval">
          {{word.reskEval}}
        </div>
        <div class="eval-contain">
          <div class="eval-left">
            <canvas id="pie" width="150" height="150"></canvas>
            <div class="risk-rate">{{word.reskred}}</div>
          </div>
          <div class="eval-center">
            <canvas id="piea" width="150" height="150"></canvas>
            <div class="risk-rate">{{word.alermRate}}</div>
          </div>
          <div class="eval-right">

            <div class="eval-list">
              <span class="text-qing"></span>
              <span>正常项目:</span>
              <span>{{data.nomalNum}}项</span>
            </div>
            <div class="eval-list">
              <span class="text-hong"></span>
              <span>异常项目:</span>
              <span>{{data.abnomal}}项</span>
            </div>
            <div class="eval-list">
              <span class="text-hong"></span>
              <span>紧急报警:</span>
              <span>{{data.nomalNum}}项</span>
            </div>
            <div class="eval-list">
              <span class="text-he"></span>
              <span>严重报警:</span>
              <span>{{data.nomalNum}}项</span>
            </div>
            <div class="eval-list">
              <span class="text-huang"></span>
              <span>一般报警:</span>
              <span>{{data.nomalNum}}项</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="top-left"></div>
        <div class="top-right"></div>
        <div class="bt-left"></div>
        <div class="bt-right"></div>
        <p>异常项目处理进度</p>
        <div class="stretch">
          <span class="text-left">已经处理</span>
          <span class="text-right">{{data.sensorCount}}</span>
        </div>
        <div class="stretch">
          <span class="text-left">处理中</span>
          <span class="text-right">{{data.nomalSensor}}</span>
        </div>
        <div class="stretch">
          <span class="text-left">未处理</span>
          <span class="text-right">{{data.currentAlarm}}</span>
        </div>
      </div>
    </div>
    <div class="below">
      <div class="top-left"></div>
      <div class="top-right"></div>
      <div class="bt-left"></div>
      <div class="bt-right"></div>
      <list />
    </div>
  </div>
</template>
<script type="text/javascript">
import list from '@/components/alermlist.vue'
import jquery from '../js/jquery.min.js'
import {PercentPie} from '../js/pie.js'
import {fetch} from '@/ut/fetch.js'

  export default {
    name: 'contents',
    data () {
      return {
        word: {
          name: '传感器总览',
          sensorNum: '传感器项',
          nomalNum: '正常项',
          abnomal: '异常项',
          reskEval: '风险评估',
          reskred: '风险比例',
          alermRate: '报警项'
        },
        data: {
          sensorNum: 200,
          nomalNum: 180,
          abnomal: 20,
          emergeAlerm: 2,
          bigAlerm: 8,
          smallAlerm: 10
        },
        cans:[],
        rate:[]
      }
    },
    computed: {

    },
    created () {
    },
    components: {list},
    mounted () {
      this.$nextTick(() => {
        this.getData('http://localhost/speed/token.php',{requst:"count"})
      })
      var stimer = null
      // this.finalCanvas()
      window.addEventListener('resize',()=>{
        clearTimeout(stimer)
        stimer=setTimeout(this.finalCanvas,500)
      })

  },
    methods: {
      setCanWidth () {
        var _this = this
        this.cans = []
         var cavns = document.querySelectorAll('.canvas-bar')
         Array.from(cavns).forEach( (val,index) => {
           _this.cans.push(val)
           val.width = val.parentNode.offsetWidth
           // console.log( val.width);
         })
      },
      getRate(data) {
        if (data.sensorCount == 0) {
            return this.rate = [0,0]
        }
         this.rate = []
         this.rate.push(Math.ceil(100*data.nomalSensor/data.sensorCount))
         this.rate.push(Math.floor(100*data.currentAlarm/data.sensorCount))
         // console.log(this.rate);
      },
      drawBall (val,rate) {
          var width = parseInt(val.width)
          var txt =val.getContext('2d')
          txt.fillStyle= val.getAttribute('data-id')=='1' ? '#02A7DF' : '#EF3F3F'
          var vx =3
          val.timer = setInterval(() => {
                    if ((100*vx/width)> rate) {
                        clearInterval(val.timer)
                    }
                    if (rate == 0 || Math.round(100*vx/width) == rate) {
                      clearInterval(val.timer)

                    }else {
                      txt.beginPath()
                      txt.arc(vx,3,3,0,Math.PI*2)
                      txt.fill()
                      vx+=2
                    }
                  },1000/60)
      },
      finalCanvas () {
        this.setCanWidth()
        this.cans.forEach( (val,index) => {
          this.drawBall(val,this.rate[index])
        })
      },
      getData (url,params) {
        var _this =this
        fetch(url,params)
        .then((value)=>{
          this.getRate(value.data)
          this.finalCanvas()
          _this.data=value.data
        })
        .then((value) => {
          this.drawpie({
            value: this.rate[0],
            name: '',
            title:'',
            backgroundColor:null,
            color:['#5FD8FF','#FE8440'],
            fontSize:16,
            domEle:document.getElementById("pie")
          })
          this.drawpie({
            value: this.rate[1],
            name: '',
            title:'',
            backgroundColor:null,
            color:['#FF0707','#FE8440'],
            fontSize:16,
            domEle:document.getElementById("piea")
          })
        })
      },
      drawpie (option) {
        var percentPie = new PercentPie(option);
        percentPie.init();
      }
    }
  }
</script>
<style type='text/css' scoped>
  .contents {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: "PingFang SC-Medium";
  }
  .contents .top {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }
  .top>div {
    position: relative;
    box-sizing: border-box;
    box-shadow: 0 0 25px 2px #5FD8FF inset;
  }
  .left,
  .right {
    width: 23%
  }
  .center {
    width: 50%;
    padding-top: 20px;
    padding-left: 20px;
    box-sizing: border-box;
    color: #fff;
  }
  .eval-left {
    width: 150px;
    text-align: center;
  }
  .contents .below {
    position: relative;
    flex: 1;
    box-sizing: border-box;
    padding: 2% 3%;
    box-shadow: 0 0 25px 2px #5FD8FF inset;
    margin-top: 2%;
    width: 100%;
  }
  .top-left,
  .top-right,
  .bt-left,
  .bt-right {
    position: absolute;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
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
  .left,
  .right {
    padding: 2% 3%;
  }
  .sensor-overlook {
    color: #fff;
    width: 100%;
    height: 100%;
  }
  .sensor-overlook p {
    font-size: 20px;
    line-height: 20px;
  }
  .stretch {
    width: 100%;
    overflow: hidden;
    margin: 5px 0;
  }
  .stretch:nth-of-type(1) {
    margin: 25px 0;
  }
  .text-left {
    float: left;
  }
  .text-right {
    float: right;
  }
  .canvas-bar {
    border-radius: 3px;
    background: #fff;
  }
  .stretch:nth-of-type(2) span:last-child {
    color: #02A7DF;
  }
  .stretch:nth-of-type(3) span:last-child {
    color: #EF3F3F;
  }
  .risk-eval {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .eval-left,
  .eval-center,
  .eval-right {
    float: left;
  }
  .eval-center {
    text-align: center;
  }
  .eval-right {
    margin-left: 5%;
    width: 45%;
    text-align: center;
  }
  @media screen and (max-width:1380px) {
    .eval-right {
      width: auto;
      margin:0;
    }
  }
  @media screen and (max-width:1100px) {
    .eval-right {
      display: none;
    }
  }
  .eval-list {
    width: 100%;
    box-sizing: border-box;
    margin: 3% auto;
    padding-left: 20%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }
  div.eval-list span {
    margin-left: 5px;
  }
  div.eval-list span:first-child{
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 1px;
  }
  .text-qing{
    background: #5FD8FF;
  }
  .text-hong {
    background: #FF0707;
  }
  .text-he {
    background: #FE8440;
  }
  .text-huang {
    background: #FFB114;
  }
  .right {
    color: #fff;
  }
  .right .stretch {
    margin:20px 0;
  }
  .right p {
    font-size: 20px;
    padding-bottom: 10%;
  }
  /* @media screen and (max-width =1400px) {
    .eval-list {
      display: none;
    }
    .top {
      display: flex;
    }
    .top>div {
      flex:1;
    }
  } */
</style>
