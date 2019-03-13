<template id="">
  <div class="ctr_f">
    <div class="controler_content">
      <div class="controler">添加传感器</div>
      <div class="controler">删除传感器</div>
      <div class="controler">导入传感器</div>
    </div>
    <div class="sensor_list">
      <table cellspacing=0 border="0" cellpadding='0'>
        <thead cellspacing=0 border="0">
          <tr>
            <th>#</th>
              <th>传感器名称</th>
              <th>IP地址</th>
              <th>传感器类型</th>
              <th>上限值</th>
              <th>下限值</th>
              <th>属性1</th>
              <th>属性2</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='item in datas'>

          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name : 'sensorset',
    data() {
      return {
        datas: [
          {

          }
        ]
      }
    },
    props: ['msg'],
    methods: {
      
    }
  }
</script>
<style type='text/css' scoped>
.controler_content {
  overflow: hidden;
}
.controler {
  color: #fff;
  float: left;
  height: 40px;
  width: 140px;
  background: linear-gradient(to bottom,#15A1F0 0%, #0085CA 100%);
  margin-left: 20px;
  border-radius: 2px;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
}
.sensor_list {
  padding-top: 30px;
  box-sizing: border-box;
  padding-left: 20px;
  width: 100%;
}
.sensor_list table {
  border-style: none;
  width: 100%;
  text-align: center;
}
.sensor_list table thead {
  border-style: none;
}
.sensor_list table thead th {
  height: 50px;
  padding: 0;
  border: 0;
  background: linear-gradient(to bottom,#15A1F0 0%, #0085CA 100%);
  color: #fff;
}
</style>
