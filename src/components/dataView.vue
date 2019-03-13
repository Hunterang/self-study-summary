<template id="">
  <div class="dataV">
    <div class="controler_content">
      <div class="controler">上传拓扑图</div>
      <div class="controler">保存位置</div>
      <div class="controler">重置传感器</div>
    </div>
    <div class="img_manage">
        <img src="@/images/123.png" alt="" width="100%">
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name : 'dataview',
    data() {
      return {

      }
    },
    props: ['msg']
  }
</script>
<style type='text/css' scoped>
  .dataV {

    width: 100%;
    height: 100%;

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

  .img_manage {
    box-sizing: border-box;
    width: 100%;
    padding:3% 5% 0;
  }
  .controler_content {
    overflow: hidden;
    /* perspective: 800; */
  }
  img {
    /* transform: rotateX(20deg); */
    /* transform: rotateY(30deg); */
    /* transform-style:preserve-3d; */
    /* transform:; */
  }
</style>
