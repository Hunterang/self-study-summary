<template id="">
  <ul>
    <slot></slot>
  </ul>
</template>
<script type="text/javascript">
  export default {
    name: 'ElMenu',
    mounted() {
      console.log(this.children);
    }
  }
</script>
<style media="screen">

</style>
