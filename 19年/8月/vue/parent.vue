<template id="">
  <div class="">
    <span :class = 'className'>{{ seperator }}</span>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'elItem',
    data() {
      return {
        seperator: '',
        className: ''
      }
    },
    inject: ['elContainer'],
    mounted() {
      this.seperator = this.elContainer.seperator || this.$parent.seperator//<区别。provide可以跨级传递，而后者则强依赖父级>
      this.calssName = this.elContainer.className
    }
  }
</script>

      /*上面是子组件，下面是父组件*/
<template id="">
  <div class="">
    i`m father
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'elContainer',
    props: {
      seperator: {
        default: '/'
      },
      className:{
        default: ''
      }
    },
    provide() {
      return {
        elContainer: this//将个人传递给后代
      }
    },
    mounted() {
      let child = this.$el.querySelectAll('.elitem')
      if (child) {
        items[items.length - 1].setAttribute('aria-current', 'page');
        //设置最后一个的样式
        //通过原生dom获取相应的节点依然可以的
      }
    }
  }
</script>
