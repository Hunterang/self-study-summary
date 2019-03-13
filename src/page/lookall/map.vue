  <template id="">
    <div id="fullmap">
      <div class="top-left"></div>
      <div class="top-right"></div>
      <div class="bt-left"></div>
      <div class="bt-right"></div>
      <div id="mapContent">
      </div>
      <div class="side-table">
        <div class="side-can">
          <!-- <canvas id="canvas-t" width=100% height=100%></canvas> -->
        </div>
        <div class="side-can">
          <!-- <canvas id="canvas-m" width=100% height=100%></canvas> -->
        </div>
        <div class="side-can">
          <!-- <canvas id="canvas-b" width=100% height=100%></canvas> -->
        </div>
      </div>
      <div class="btm-table">
        <div class="btm-left">

        </div>
        <div class="btm-right">
          <table>
            <thead>
              <tr>
                <td>传感器</td>
                <td>数据项</td>
                <td>状态</td>
                <td>信息</td>
                <td>报警时间</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for='item,index in alermItems'>
                <td>{{item.name}}</td>
                <td>{{item.value}}</td>
                <td class="set-bkg">{{item.stadus}}</td>
                <td>{{item.Message}}</td>
                <td>{{item.time}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  <script type="text/javascript">
  let echarts = require('echarts/dist/echarts.min.js')
  let bmap =require('echarts/dist/extension/bmap.js')
    export default {
      name: 'maps',
      data () {
        return {
          alermItems: [
            {name:'温湿度',value:'20',stadus:'紧急','Message':'通讯错误',time:'2018'},
            {name:'温湿度',value:'20',stadus:'紧急','Message':'通讯错误',time:'2018'},
            {name:'温湿度',value:'20',stadus:'紧急','Message':'通讯错误',time:'2018'}
          ],
          geoCoordMap: {
            '上海':[121.48,31.22],
            '广州':[113.26, 23.13],
            '深圳':[114.0628,22.55],
            '重庆':[106.5579,29.57],
            '沈阳':[123.456,41.8]
          },//同data相符相成
          data: [
            {name: '广州',value:50},
            {name:'上海',value:48},
            {name:'深圳',value:52},
            {name:'重庆',value:51},
            {name:'沈阳',value:43}
          ],
          options: [
            {
              title: {
                text: 'cpu使用率',
                left: 'left',
                textStyle: {
                  color: '#aaa'
                }
              },
              tooltip: {
                formatter:  '{a}<br>{c} {b}'
              },
              toolbox: {
                 show: false,
                 feature: {
                     restore: {show: true},
                     saveAsImage: {show: true}
                 }
              },
              series: [
                {
                  name: 'cpu使用率',
                  type: 'gauge',
                  center: ['50%','55%'],
                  radius: '80%',
                  min: 0,
                  max: 100,
                  startAngle:180,
                  endAngle:0,
                  splitNumber:4,
                  axisLine: {
                    lineStyle: {
                      width:12
                    }
                  },
                  axisTick: {
                    show: false
                  },
                  axisLabel: {
                     formatter(v) {
                       return ''
                     }
                 },
                 splitLine: {
                   length: 15,
                   lineStyle: {
                     color: 'auto'
                   }
                 },
                 pointer: {
                      width:2
                  },
                  title: {//名字
                    show: false,
                    offsetCenter: [0, '-30%'], // x, y，单位px
                    textStyle: {
                      color: '#aaa'
                    }
                  },
                  detail : {
                      show: false
                  },
                  detail: {
                    formatter:'{value}%',
                    fontSize: 20
                  },
                  data:[{value: 50, name: '使用率'}]
                }
              ]
            },
            {
              title:{
                text:'监控项目统计',
                center: 'left',
                textStyle: {
                  color: '#aaa'
                }
              },
              center: ['55%','50%'],
              color: ['#65D8FF','#006699'],
              grid: {
                left: 30
              },
              legend: {
                data: ['设备项','传感器'],
                x: 'right',
                y: 25,
                textStyle: {
                  color: '#eee'
                }
              },
              toolbox: {
                  show: true,
                  orient: 'vertical',
                  left: 'right',
                  top: 'center',
                  feature: {
                  }
              },
              tooltip: {
                trigger: 'axis',
                formatter: '{b}:{c}',
                axisPointer: {
                    type: 'shadow'
                }
              },
              xAxis: [
                {
                  type: 'category',
                  data: ['广州','上海','深圳','重庆','沈阳'],
                  axisLine: {
                    lineStyle: {
                        color: '#c0576d'
                      }
                  },
                  axisLabel: {
                    textStyle: {
                        color: '#aaa'
                    }
                  }
                }
              ],
              yAxis: [
                {
                  type: 'value',
                  axisLine: {
                    lineStyle: {
                        color: '#c0576d'
                      }
                  },
                  axisLabel: {
                    textStyle: {
                        color: '#aaa'
                    }
                  }
                }
              ],
              series: [
                {
                  name:'设备项',
                  type:'bar',
                  barGap: 0,
                  data:[180,60,40,30,280]
                },
                {
                  name:'传感器',
                  type:'bar',
                  barGap: 0,
                  label:'',
                  data:[230,80,50,70,320]
                }
              ]
            },
            {
              title: {
                text: '机房风险',
                center: 'left',
                textStyle: {
                  color: '#aaa'
                }
              },

              color: ['#38a8da','#c7000a'],
              legend: {
                data: ['正常项','异常项'],
                orient: 'vertical',
                x:'right',
                y:'middle',
                textStyle: {
                  color: '#eee'
                }
              },
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
              },
              toolbox: {
                show: false
              },
              series: [
                {
                  name:'正常项',
                  type: 'pie',
                  center: ['35%', '50%'],
                  radius: ['50%','65%'],
                  label: {
                      normal: {
                          show: false,
                          position: '60%',
                          formatter: "{b}\n{d}%"
                      },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                  },
                  data:[
                    {
                      value:335,
                      name:'正常项',
                      label: {
                          normal: {
                              show: true,
                              position: 'center'
                          },
                        }
                    },
                    {
                      value:10, name:'异常项'
                    }
                  ]
                }
              ]
            },
            {
              title: {
                text: '广州机房能耗占比',
                left: '10%',
                top:'5%',
                textStyle: {
                  color: '#aaa'
                }
              },
              legend: {
                data: ['USP能耗','IT设备能耗','空调能耗','照明能耗','其他能耗'],
                orient: 'vertical',
                x: '60%',
                y: 'middle',
                textStyle: {
                  color: '#eee',
                  fontSize: 15
                }
              },
              tooltip: {
                trigger: 'item',
                formatter: '{b}\n{d}%'
              },
              toolbox: {
                show: false
              },
              series: [
                {
                  type: 'pie',
                  center: ['30%','50%'],
                  radius: ['40%','55%'],
                  label: {
                    normal: {
                      show: false,
                      // position: 'center',
                      textStyle: {
                        fontSize: 18
                      },
                      formatter: '能耗'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data: [
                    {
                      value: 60,
                      name: 'USP能耗',
                      label: {
                        normal: {
                          show: true,
                          position: 'center',
                          textStyle: {
                            color: '#aaa'
                          }
                        }
                      }
                    },
                    {
                      value: 15,
                      name: 'IT设备能耗'
                    },
                    {
                      value: 10,
                      name: '空调能耗'
                    },
                    {
                      value:8,
                      name: '照明能耗'
                    },
                    {
                      value: 7,
                      name : '其他能耗'
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      mounted () {
        var timers=0,_this= this
        this.initStyle()
        this.showMap()
      },
      methods: {
        initStyle () {
          var _this =this
          var acans = document.querySelectorAll('.side-can')
          var btmLeft =document.querySelector('.btm-left')
          _this.drawPie(btmLeft,_this.options.pop())
          Array.from(acans).forEach((val,index) => {
            _this.drawPie(val,_this.options[index])
          })
        },
        drawPie (obj,option) {
          var myChart = this.$echarts.init(obj)
          myChart.setOption(option)
          window.addEventListener('resize',() => {
            myChart.resize()
          },500)
        },
        convertData (data) {//针对地图数据的方法，生成series中的data
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = this.geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        },
        showMap() {
          var _this =this
          var myChart = this.$echarts.init(document.getElementById('mapContent'))
          myChart.setOption({
            title: {
              text: '全国主要城市机房监控',
              left: 'center',
              textStyle: {
                color: '#fff'
              }
            },
            tooltip : {
              trigger: 'item',
              formatter(params){
                return params.data.name+'\r:\n'+params.value[2]
              },
              backgroundColor: '#558eff'
            },
      bmap: {
        center: [105.224129, 21.899339],
          zoom: 5,
          roam: true,
                  mapStyle: {
                         styleJson: [
            {
                      'featureType': 'land',     //调整土地颜色
                      'elementType': 'geometry',
                      'stylers': {
                                  'color': '#081734'
                      }
            },
            {
                      'featureType': 'building',   //调整建筑物颜色
                      'elementType': 'geometry',
                      'stylers': {
                                'color': '#04406F'
                      }
            },
           {
                      'featureType': 'building',   //调整建筑物标签是否可视
                      'elementType': 'labels',
                      'stylers': {
                      'visibility': 'off'
                      }
            },
            {
                      'featureType': 'highway',     //调整高速道路颜色
                      'elementType': 'geometry',
                      'stylers': {
                        'visibility': 'off',
                      'color': '#015B99'
                      }
            },
            {
                      'featureType': 'highway',    //调整高速名字是否可视
                      'elementType': 'labels',
                      'stylers': {
                      'visibility': 'off'
                      }
            },
            {
                      'featureType': 'arterial',   //调整一些干道颜色
                      'elementType': 'geometry',
                      'stylers': {
                      'color':'#003051'
                      }
            },
            {
                      'featureType': 'arterial',
                      'elementType': 'labels',
                      'stylers': {
                      'visibility': 'off'
                      }
            },
            {
                      'featureType': 'green',
                      'elementType': 'geometry',
                      'stylers': {
                      'visibility': 'off'
                      }
            },
            {
                      'featureType': 'water',
                      'elementType': 'all',
                      'stylers': {
                                'color': '#333333'
                      }
            },
            {
                      'featureType': 'subway',    //调整地铁颜色
                      'elementType': 'geometry.stroke',
                      'stylers': {
                      'color': '#003051'
                      }
            },
            {
                      'featureType': 'subway',
                      'elementType': 'labels',
                      'stylers': {
                      'visibility': 'off'
                      }
            },
            {
                      'featureType': 'railway',
                      'elementType': 'geometry',
                      'stylers': {
                      'visibility': 'off'
                      }
            },
            {
                      'featureType': 'railway',
                      'elementType': 'labels',
                      'stylers': {
                      'visibility': 'off'
                      }
            },
            {
                      'featureType': 'all',     //调整所有的标签的边缘颜色
                      'elementType': 'labels.text.stroke',
                      'stylers': {
                                'color': '#313131'
                      }
            },
            {
                      'featureType': 'all',     //调整所有标签的填充颜色
                      'elementType': 'labels.text.fill',
                      'stylers': {
                                'color': '#FFFFFF'
                      }
            },
            {
                      'featureType': 'manmade',
                      'elementType': 'geometry',
                      'stylers': {
                      'visibility': 'off'
                      }
            },
            {
                      'featureType': 'manmade',
                      'elementType': 'labels',
                      'stylers': {
                      'visibility': 'off'
                      }
            },
            {
                      'featureType': 'local',
                      'elementType': 'geometry',
                      'stylers': {
                      'visibility': 'off'
                      }
            },
            {
                      'featureType': 'local',
                      'elementType': 'labels',
                      'stylers': {
                      'visibility': 'off'
                      }
            },
            {
                      'featureType': 'subway',
                      'elementType': 'geometry',
                      'stylers': {
                                'lightness': -65
                      }
            },
            {

                 "featureType": "label",
                 "elementType": "all",
                 "stylers": {
                     "visibility": "off"
                }

            },
            {
                      'featureType': 'railway',
                      'elementType': 'all',
                      'stylers': {
                                'lightness': -40
                      }
            },
            {            "featureType": "poi",
                          "elementType": "all",
                           "stylers": {
                              "visibility": "off"
                            }
              },
              {
                      'featureType': 'boundary',
                      'elementType': 'geometry',
                      'stylers': {
                                'color': '#ff8787',
                                'weight': '.5',
                                'lightness': -29
                      }
            }]
          }
      },
      series: [{
            // name: 'Point',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: _this.convertData(_this.data.sort((a, b)=>{
                return b.value - a.value
            })),
            symbolSize: function (val) {
               return val[2] /3.5
           },
           // showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                   normal: {
                       color: '#fff',
                       shadowBlur: 30,
                       shadowColor: '#333'
                   }
               },
               zlevel: 1
           }
        ]

      })
      var bmap = myChart.getModel().getComponent('bmap').getBMap();
      bmap.addControl(new BMap.MapTypeControl());
        }
      }
    }
  </script>
  <style type='text/css' scoped>

  #fullmap {
    width: 100%;
    height: 100%;
    position: relative;
    box-shadow: 0 0 30px 1px #5FD8FF inset;
  }
  #mapContent {
    width: 100%;
    height: 100%;
    z-index:1;
  }
  .top-left,
  .top-right,
  .bt-left,
  .bt-right {
    position: absolute;
    box-sizing: border-box;
    z-index: 99;
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
  .side-table {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border-radius: 6px;
    left: 2%;
    top: 3%;
    width: 13%;
    height: 94%;
    padding:0 2%;
    border: 1px solid #5FD8FF;
    position: absolute;
    z-index:98;
    box-shadow: 0 0 30px 1px #5FD8FF inset;
    background: rgba(255,255,255,.1);
    overflow-y: auto;
  }
  .btm-table {
    width: 74%;
    position: absolute;
    bottom: 3%;
    right: 4%;
    height: 35%;
    display: flex;
    z-index: 98;
    align-items: stretch;
  }
  .btm-left,
  .btm-right {
    border-radius: 6px;
    border: 1px solid #5FD8FF;
    box-shadow: 0 0 30px 1px #5FD8FF inset;
  }
  .btm-left {
    width: 45%;
    margin-right: 5%;
  }
  .btm-right {
    flex: 1;
    flex-shrink: 1;
  }

  .side-can {
    box-sizing: border-box;
    flex:1;
    flex-shrink: 1;
  }
  .side-can canvas {
    /* border: 1px solid #eee; */
  }
  .btm-right table {
    font-size: 14px;
    padding: 2% 3%;
    width: 100%;
    color: #eee;
    text-align: center;
  }
  .btm-right table thead tr{
    width: 100%;
    height: 48px;
  }
  .btm-right table tbody tr {
    height: 40px;
    width: 100%;
  }
  .set-bkg {

  }
  </style>
