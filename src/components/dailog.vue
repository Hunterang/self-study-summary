<template id="">
  <div class="dailog">
    <div class="top-left"></div>
    <div class="top-right"></div>
    <div class="bt-left"></div>
    <div class="bt-right"></div>
    <p>红色背景的为选中部分</p>
    <p>确定删除吗？</p>
    <span @click='backF(false)'>返回</span>
    <span @click='backF(true)'>确定</span>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {

      }
    },
    methods: {
      backF(str) {
        this.$emit('message',str)
      }
    }


  }
</script>
<style type='text/css' scopd>
.dailog {
  color: #fff;
  border: 1px solid #FF5F5F;
  font-size: 0;
  box-shadow:0 0 10px 0 #FF5F5F inset ;
  width: 350px;
  height: 200px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -175px;
  margin-top: -180px;
}
.dailog p {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  margin: 30px 0 20px;
  text-align: center;
}
.dailog span {
  cursor: pointer;
  width: 130px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  display: inline-block;
  font-size: 14px;
}
.dailog span:nth-of-type(1){
  margin-left: 40px;
  border: 1px solid #5FD8FF;
  box-shadow: 0 0 20px 0 #5FD8FF inset;
}
.dailog span+span {
  margin-left: 10px;
  border: 1px solid #FF5F5F;
  box-shadow: 0 0 30px 1px #FF5F5F inset;
}
.dailog .top-left {
  width: 40px;
  height: 40px;
  top: -20px;
  left: -20px;
}
.dailog .top-right {
  width: 40px;
  height: 40px;
  top: -20px;
  right: -20px;
}
.dailog .bt-left {
  width: 40px;
  height: 40px;
  bottom: -20px;
  left: -20px;
}
.dailog .bt-right {
  width: 40px;
  height: 40px;
  bottom: -20px;
  right: -20px;
}
</style>
