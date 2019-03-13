<template id="">
  <div class="Header">
    <div class="head-left">
      <span :class='iconhead[0]' @click='changStyle' ref=list></span>
      <span>{{msg}}</span>
    </div>
    <div class="head-right">

      <span :class='iconhead[1]'></span>
    </div>
  </div>
</template>
<script type="text/javascript">
import './icon/iconfont.css';
  export default {
    name: 'heade',
    data () {
      return {
        msg: '斯必得后台系统',
        iconhead: [
          'iconfont icon-home_shousuo_h_icon',
          'icon iconfont icon-tuichu'
        ],
        listState: true,
        reg: /\strans/,
        index: null
        // collection: []
      }
    },
    mounted () {
      let timer = null
      window.onresize = () => {
        clearTimeout(timer)
        var timer = setTimeout( () => {
          if (window.innerWidth<850&&this.listState==true) {
            this.listState = false
            this.$refs.list.className+= ' trans'
          }if (window.innerWidth>850&&this.listState==false) {
            this.listState = true
            this.index= this.$refs.list.className.search(this.reg)
            this.$refs.list.className=this.$refs.list.className.substring(0,this.index);
          }
        },20)
      }
    },
    watch: {
      listState () {

      }
    },
    methods: {
      changStyle () {
        if (this.listState) {
          this.$refs.list.className+= ' trans'
        }else {
          this.index= this.$refs.list.className.search(this.reg)
          this.$refs.list.className=this.$refs.list.className.substring(0,this.index);
        }
        this.listState = !this.listState
      }
    }
  }
</script>
<style Type='text/css' scoped>
  .iconfont {
    color: #fff;
  }
  .icon-home_shousuo_h_icon {
    color: #666;
    font-size: 20px;
  }
  .trans {
    transform: rotate(90deg);
  }
  .Header {
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 10px;
    /* justify-content: space-between;   */
  }
  .head-left,
  .head-right{
    box-sizing: border-box;
    height: 100%;
    flex: 1;
  }
  .head-left {
    text-align: left;
  }
  .head-left span {
    transition: .3s;
    display: inline-block;
    cursor: pointer;
  }
  .head-right {
    text-align: right;
  }
  .head-right span {
    padding: 5px;
    cursor: pointer;
    background: #009688;
    border-radius: 4px;
  }
  /* .Header span:first-child {
    white-space: nowrap;
    box-sizing: border-box;
    padding-left: 20%;
    font-size: 20px;
    line-height: 20px;
  }
  .Header span:last-child {
    box-sizing: border-box;
    padding-right: 20px;
    font-size: 20px;
    line-height: 20px;
  } */
</style>
