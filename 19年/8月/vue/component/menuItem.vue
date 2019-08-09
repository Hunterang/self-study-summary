<template id="">
  <li :style="{height: height+'px'}">
    <p>{{title}}</p>
    <slot></slot>
  </li>
</template>
<script type="text/javascript">
  export default {
    name: 'ElMenuItem',
    props: {
      title: {
        type: String,
        default: 'helloworld',
      },
      height: 40
    },
    mounted() {
      let i
      if (i=this.children[0] && i.name === 'ElMenu' && i = i.children) {
        //查找对象下的对象中的某些数据时候，这个方法简直完美，为自己只看一遍就会用感到无比骄傲 || 上次做了一个前端路由跳转的方法 lala
        this.height += i.length* 40
      }
    }
  }
</script>
