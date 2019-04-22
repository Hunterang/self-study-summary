<template id="">
  <div class="tip">

  </div>
</template>
<script type="text/javascript">
export default {
  name: 'MyTips',
  props: {
    tip: {
      type: String,
      default: 'hello world'
    }
  }
}

</script>
<style type='text/css' scoped>
  .tip {
    position: absolute;
    animation: animate 1s 1;
    height: 48px;
    width: 200px;
    top: 30px;
    left: 50%;
    margin-left: -100px;
  }
  @keyframes animate {
    0% {
      opacity: 0;

    }
    100% {
      opacity: 1;
      transform: translateY(30px);
    }
  }
</style>
