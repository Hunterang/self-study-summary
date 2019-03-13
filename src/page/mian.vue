<template id="">
  <div class="main-contain">
    <div class="header">
      <top />
    </div>
    <div class="content">
    <div class="content-left">
      <side />
    </div>
      <div class="content-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import {side,top} from './main/index.js'
export default {
  name: 'mian',
  data () {
    return {

    }
  },
  mounted () {
    this.$router.push({'name': 'contents'})
  },
  components: {side,top},
  methods: {

  }
}
</script>
<style type='text/css' scoped>
  .main-contain {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header {
    height: 100px;
    width: 100%;
  }
  .content {
    margin-top: 2%;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    align-items: stretch;
  }
  .content-left {
    width: 60px;

  }
  .content-right {
    flex: 1;
    box-sizing: border-box;
    padding-right: 60px;
    padding-bottom: 40px;

  }
</style>
