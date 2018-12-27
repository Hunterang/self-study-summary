<template id="">
  <div class="sidebar">
    <ul>
      <li v-for='item in items'>{{item}}</li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'sidebar',
    data () {
      return {
        items: ['所有传感器','报警状态','传感器设置','系统设置','个人中心','视频监控'],
        // items: {
        //   '所有传感器': [],
        //   '报警状态': [],
        //   '传感器设置': [],
        //   '系统设置': [],
        //   '个人中心': [],
        //   '视频监控': []
        // }
      }
    }
  }
</script>
<style Type='text/css' scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .sidebar {
    width: 100%;
    height: 100%;
    background: #427594;
  }
  ul {
    padding-top: 30px;
  }
  ul li {
    font-size: 16px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: left;
    padding: 10px 0px 10px 30px;
    border-bottom: 1px solid #fff;
  }
  ul li:first-child {
    border-top: 1px solid #fff;
  }
</style>
