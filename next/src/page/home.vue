<template id="">
  <div class="home">
    <heade />
    <div :class='{active: isActive}'>
      <sidebar />
    </div>
  </div>
</template>
<script type="text/javascript">
  import {heade,sidebar} from './componet/inde.js'
  export default {
    name : 'home',
    components: { heade,sidebar},
    data () {
      return {
        data : '',
        isActive : true
      }
    }
  }
</script>
<style type='text/css' scoped >
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .active {
    flex :1;
    width: 10%;
    height: 10px;
    /* height: 889px; */
  }
</style>
