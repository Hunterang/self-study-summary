<template id="">
  <div class="set_room" @click='changeSet($event)' >
    <div class="left_bar">
      <p>{{msg}}</p>
      <ul>
        <!-- <li style="padding:0">基础信息设置</li> -->
        <li v-for='item,index in message'
              @click='setStyle(index)'
              :class='[aindex == index ? active : ""]'
        >{{item}}</li>
      </ul>
    </div>
    <div class="right_content">
        <div class="controler" @click='back()'>保存退出<span class=""></span></div>
        <baseset v-show='aindex == 0' :msg=msg></baseset>
        <dataView v-show='aindex == 1' :msg=msg></dataView>
        <sensorset v-show='aindex == 2' :msg=msg></sensorset>
        <alermset v-show='aindex == 3' :msg=msg></alermset>
        <doorlock v-show='aindex == 4' :msg=msg></doorlock>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import baseset from '@/components/baseset.vue'
import dataView from '@/components/dataView.vue'
import sensorset from '@/components/sensorset.vue'
import doorlock from '@/components/doorlock.vue'
import alermset from '@/components/alermset.vue'
  export default {
    name: 'manageroom',
    data() {
      return {
        message: ['基础信息设置','可视化布局','传感器设置','告警设置','门禁设置'],
        aindex: 0,
        active: 'line',
        giveChild: ''
      }
    },
    props: ['msg'],
    components: {
      alermset,
      sensorset,
      doorlock,
      dataView,
      baseset
    },
    methods: {
      changeSet(e) {
        e.stopPropagation()
      },
      setStyle(num) {
        this.aindex =num
      },
      back() {
        this.$emit('recive')
      }
    }
  }
</script>
<style type='text/css' scoped>
  .set_room{
    width: 90%;
    height: 90%;
  }
  .line {
    opacity: .8 !important;
    background: linear-gradient(to right,#229FEB,#0070B3);
    border-top: 1px solid #5FD8FF;
    border-bottom: 1px solid #5FD8FF;
    line-height: 58px !important;
  }
  .left_bar {
    float: left;
    width: 10%;
    height: 100%;
    background: linear-gradient(to right,rgba(34,159,235,0.4),rgba(0,112,179,0.4));
  }
  .left_bar p {
    text-align: center;
    padding: 30px 0 0;
    color: #55cba6;
    font-weight: bold;
  }
  .left_bar ul {
    /* padding-top: 40px; */
    list-style: none;
    color: #fff;
  }
  .left_bar ul li{
    box-sizing: border-box;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    text-align: center;
    /* background: linear-gradient(to right,#229FEB,#0070B3); */
    cursor: pointer;
    opacity: 0.6;
  }
  .right_content {
    float: left;
    height: 100%;
    width: 90%;
    background: rgba(0,0,0,.4);
    box-shadow: 0 0 20px 1px #5FD8FF inset;
    box-sizing: border-box;
    border: 1px solid #5FD8FF;
    /* box-sizing: border-box; */
    padding: 2% 1%;
  }
  .controler {
    cursor: pointer;
    color: #fff;
    height: 40px;
    width: 140px;
    background: linear-gradient(to bottom,#15A1F0 0%, #0085CA 100%);
    border-radius: 2px;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    float: right;
    margin-right: 20px;
  }
</style>
