<template id="">
  <div class="side">
    <div class="bar">
      <span class="iconfont icon-shuangjiantouyou"></span>
    </div>
  </div>
</template>
<script type="text/javascript">
import '../icon/iconfont.css'
  export default {
    name: 'side',
    data () {
      return {

      }
    }
  }
</script>
<style type='text/css' scoped>
  .iconfont {
    color: #fff;
    font-size: 18px;
  }
  .side {
    width: 100%;
    height: 100%;
    /* background: #eee; */
    display: flex;
    align-items: center;
  }
  .bar {
    display: flex;
    align-items: center;
    border-top-right-radius:8px;
    border-bottom-right-radius:8px;
    width: 20px;
    height: 50%;
    background: linear-gradient(to bottom,#15A1F0,#0085CA);
  }
  .bar span {
    padding: 2px;
  }
</style>
