<template id="">
  <div class="base_set">
    <p>机房名称</p>
    <div class="name_mechan">
      <input type="text" name="" value="">
    </div>
    <p>IP地址</p>
    <div class="name_ip">
      <input type="text" name="" value="">
    </div>
    <p>机房地址</p>
      <div class="flex" id="demo3">
        <select v-for="item in city_nameArr" class="city-select" :name="item"></select>
      </div>
    <p>机房主机</p>
    <div class="mian_mechien">

    </div>
  </div>
</template>
<script type="text/javascript">

  export default {
    name : 'alermset',
    data() {
      return {
        city_nameArr: ['province','city','area']
      }
    },
    props: ['msg'],
    mounted() {
      $('#demo3').citys({
      type: 'name',
      province: '广东省',
      city: '广州市',
      area: '天河区'
      })
    },
    methods: {

    }
  }
</script>
<style type='text/css' scoped>
.base_set {
  width: 100%;
  margin-left: 3%;
  margin-top: 80px;
  font-size: 18px;
  color: #fff;
}
.flex {
  margin: 20px 0;
  width: 50%;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: stretch;
}
.flex select {
  width: 30%;
  background: linear-gradient(to bottom,#15A1F0 0%, #0085CA 100%);
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  padding: 0 10px;
  border: none;
  outline:none;
}
.flex select option .styleS {
  background: #000 !important;
}
.name_mechan,.name_ip {
  width: 50%;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #5FD8FF;
  box-shadow: 0 0 10px 1px #5FD8FF inset;
  text-align: center;
  margin: 20px 0;
}
input {
  color: #fff;
  outline: none;
  border: none;
  background: none;
  width: 80%;
  height: 100%;
}
.mian_mechien{
  margin-top: 20px;
  width:30%;
  height: 48px;
  background: linear-gradient(to bottom,#15A1F0 0%, #0085CA 100%);
  border-radius: 8px;
}
</style>
