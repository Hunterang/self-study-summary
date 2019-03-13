<template id="">
  <div class="show_big">
    <div class="top-left"></div>
    <div class="top-right"></div>
    <div class="bt-left"></div>
    <div class="bt-right"></div>
    <div class="show_head">
      {{vedio.head}}
    </div>
    <div class="outer_x" @click='tellFather()'>
      <span class="dele_x">x</span>
    </div>
    <div class="vedio_magnage_left">
      <div class="left_wrap">
        <p>{{vedio.vedioName}}</p>
        <div class="ipt_wrap">
          <input type="text" name="" value="">
        </div>
        <p>{{vedio.ip}}</p>
        <div class="ipt_wrap">
          <input type="text" name="" value="">
        </div>
      </div>
    </div>
    <div class="vedio_magnage_center">
      <p>{{vedio.belong}}</p>
      <div class="ul_wrap">
        <ul>
          <li v-for='item in vedio.belongArr'>
            <span>{{item}}</span>
            <input type="checkbox" name="" value="">
          </li>
          <!-- <li>
            <span>广州机房</span>
            <input type="checkbox" name="" value="">
          </li>
          <li>
            <span>广州机房</span>
            <input type="checkbox" name="" value="">
          </li>
          <li>
            <span>广州机房</span>
            <input type="checkbox" name="" value="">
          </li>
          <li>
            <span>广州机房</span>
            <input type="checkbox" name="" value="">
          </li>
          <li>
            <span>广州机房</span>
            <input type="checkbox" name="" value="">
          </li> -->
        </ul>
      </div>
    </div>
    <div class="vedio_magnage_right">
      <div class="reset">
        重置
      </div>
      <div class="store">
        保存
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'addList',
    data() {
      return {
        vedio: null
        // vedio: this.$store.self.state.vedio
      }
    },
    props: ['msg'],
    created(){
      if (this.msg == 'vedio') {
        this.vedio = this.$store.getters.getVedioMsg
      }
      if (this.msg == 'manager') {
        this.vedio = this.$store.getters.getManagerMsg
      }
    },
    computed: {

    },
    methods: {
      tellFather() {
        this.$emit('recieve','alerT')
      }
    }
  }
</script>
<style type='text/css' scoped>
.show_big {
  /* border: 1px solid #5FD8FF; */
  width: 80%;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index:999;
  margin-left: -40%;
  margin-top: -300px;
  background-size: 100% 100%;
}
.show_big .top-left {
  top: -10px;
  left: -10px;
}
.show_big .top-right {
  top: -10px;
  right: -10px;
}
.show_big .bt-left {
  bottom: -10px;
  left: -10px;
}
.show_big .bt-right {
  bottom: -10px;
  right: -10px;
}
.del_x {
  display: inline-block;
  position: absolute;
  top: -20px;
  right: -20px;
  color: #5FD8FF;
}
.show_head {
  border: 1px solid #5FD8FF;
  position: absolute;
  top: -18%;
  left: 50%;
  width: 300px;
  height: 60px;
  font-size: 22px;
  line-height: 60px;
  margin-left: -150px;
  text-align: center;
  color: #fff;
  box-shadow:  0 0 25px 2px #5FD8FF inset;
}
.outer_x {
  width: 22px;
  height: 22px;
  position: absolute;
  top: -18%;
  border: 1px solid #5FD8FF;
  color: #5FD8FF;
  text-align: center;
  font-weight: bold;
  line-height: 22px;
  cursor: pointer;
  right: 0;
}
.vedio_magnage_left,
.vedio_magnage_center,
.vedio_magnage_right {
  padding-top: 5%;
  float: left;
  box-sizing: border-box;
  width: 41%;
  height: 100%;
  border: 1px solid #5FD8FF;
  box-shadow:  0 0 25px 2px #5FD8FF inset;
}
.vedio_magnage_right {
  width:18%;
}
.vedio_magnage_center p {
  margin-left: 10%;
}
.vedio_magnage_center ul {
  width: 80%;
  margin: 0 auto;
  list-style: none;
}
.vedio_magnage_center ul li {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}
.left_wrap {
  font-weight: bold;
  width: 80%;
  margin: 0 auto;
}
.ipt_wrap {
  margin: 30px 0;
  height: 50px;
  border: 1px solid #5FD8FF;
  border-radius: 8px;
}
.ipt_wrap input{
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  text-indent: 15px;
  color: #fff;
  box-shadow:  0 0 25px 2px #5FD8FF inset;
}
.ul_wrap {
  width: 80%;
  margin-left: 10%;
  margin-top: 30px;
  border: 1px solid #5FD8FF;
  height: 80%;
  border-radius: 8px;
  font-size: 14px;
  box-shadow:  0 0 25px 2px #5FD8FF inset;
}
p {
  font-weight: bold;
}
.reset,
.store {
  width: 80%;
  height: 40px;
  line-height: 40px;
  margin: 0 auto 20px;
  font-size: 12px;
  text-align: center;
  font-weight: 400;
  border-radius: 2px;
  background: linear-gradient(to bottom, #15A1F0 0%, #0085CA 100%);
}
</style>
