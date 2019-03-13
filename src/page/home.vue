<template id="">
  <div class="home">
    <div :class='{active: isActive}'>
      <sidebar />
    </div>
    <heade />
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
    /* flex-direction: column; */
  }
  .active {
    width: 15%;
    height: 100%;
    transition: .3s;
    white-space: nowrap;
    overflow: hidden;
    /* height: 889px; */
  }
  /* @media screen and (min-width: 1300px) and (max-width: 1500px) {
    .active {
      width: 12%;
    }
  }*/
  @media screen and (min-width: 850px) and (max-width: 1300px) {
    .active {
      width: 18%;
    }
  }
  @media screen and (max-width: 850px) {
    .active {
      width: 40px;
    }
  }
</style>
