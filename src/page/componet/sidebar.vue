<template id="">
  <div class="sidebar">
    <ul>
      <li v-for='item,key,index in items' >
        <span v-bind:class='[iconfont,icons[index]]'></span>
        <span class='describ'>{{key}}</span>
          <span v-bind:class='[iconfont,item.length==0 ? "" : arrow]'></span>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  import './icon/iconfont.css';
  export default {
    name: 'sidebar',
    data () {
      return {
        // items: ['所有传感器','报警状态','传感器设置','系统设置','个人中心','视频监控'],
        items: {
          '所有传感器': ['电柜'],
          '报警状态': [],
          '传感器设置': [],
          '系统设置': [],
          '个人中心': [],
          '视频监控': []
        },
        icons: ['icon-suoyoushangpin2','icon-baojing','icon-shezhi','iconfont icon-shezhi','icon-geren11','icon-ziyuan'],
        iconfont: 'iconfont',
        arrow: 'icon-arrow-right-copy-copy'
      }
    }
  }
</script>
<style Type='text/css' scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .describ {
    padding: 0 10px;
  }
  .iconfont {
    color: #bfcbd9;
    font-weight: 600;
    font-size: 14px;
  }
  .sidebar {
    width: 100%;
    height: 100%;
    background: #304156;
  }
  ul {
    padding-top: 30px;

  }
  ul li {
    color: #fff;
    display: flex;

    /* justify-content: space-between; */
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: left;
    padding: 20px 10px;
    color: #bfcbd9;

    /* border-bottom: 1px solid #fff; */
  }
  ul li:hover {
    opacity: .8;
    background: #333;
  }
  ul li span:first-child,
  ul li span:last-child {
    width: 15px;
  }
  ul li span:nth-child(2) {
    flex: 1;
    padding-left: 15px;
    box-sizing: border-box;
    line-height: 14px;
  }

</style>
