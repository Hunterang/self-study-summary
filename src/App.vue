<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.set()
    var timers = null
    window.onresize = () => {
      clearTimeout(timers)
      timers = setTimeout (() => {
        // console.log(this.$route.path);
        // this.$router.push({path:this.$route.path})
        this.set()
      },20)
    }
  },
  methods: {
    set () {
      this.$el.style.height = document.documentElement.clientHeight+'px';
    }
  }
}

</script>

<style>
* {
  margin : 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background: #333;
  /* background: url('../static/back.jpg') no-repeat;
  background-size: 100%; */
  /* margin-top: 60px; */
}

</style>
