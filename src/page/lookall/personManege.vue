<template id="">
  <div class="personManege">
    <Manage />
  </div>
</template>
<script type="text/javascript">
  import Manage from '@/components/Manage.vue'
  export default {
    name: 'personManege',
    data() {
      return {

      }
    },
    components: {
      Manage
    }
  }
</script>
<style type='text/css' scoped>

.personManege {
  width: 100%;
  height: 100%;
}

</style>
