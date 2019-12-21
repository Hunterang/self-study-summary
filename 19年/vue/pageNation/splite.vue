<template>
  <div class="split-wrap">
    <ul class="ul">
      <li class="left"><</li>

      <!--首页-->
      <li class="number">1</li>
      <li
        @click="changePrev"
        v-if="showPrev" 
        class="prev">
        ...
      </li>

      <li
         class="center"
         @click='changeCurrentPage(item)'
         :class="{'act': currentPage == item}"
         v-for="item in pagers" 
        :key="item">
        {{ item }}
      </li>


      <li 
        @click="changeNext"
        v-if="showNext"
        class="showNext">
        ...
      </li>

      <li 
        v-if='pageCount>1'
        class="number">{{ pageCount }}</li>
      <li class="right">></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pageNation',
  data() {
    return {
      showPrev: false,
    showNext: false,
    }
  },
  props: {
    pageCount: Number,

    currentPage: Number,

    pageNum: Number,//默认给个7
  },
  computed: {
    pagers() {
      // debugger
      const pageCount = this.pageCount
      const pageNum = this.pageNum
      const halfPageNum = (pageNum -1)/2
      const currentPage = this.currentPage

      let showPrev = false
      let showNext = false

      if(pageCount > pageNum) {
        if(currentPage > pageNum - halfPageNum) {
          showPrev = true
        }
        if(currentPage < pageCount - halfPageNum) {
          showNext = true
        }   
      }

      let pagerArr = []
      
      if(showPrev && !showNext) {
        const startNum = pageCount - (pageNum -2)
        for(let i=startNum; i< pageCount; i++ ) {
          pagerArr.push(i)
        }
      }
      else if(!showPrev && showNext) {
        for(let i=2; i< pageNum; i++) {
          pagerArr.push(i)
        }
      }
      else if(showPrev && showNext) {
        const startNum = currentPage - halfPageNum + 1
        const endNum = currentPage + halfPageNum 
       
        for(let i=startNum; i< endNum; i++) {
          pagerArr.push(i)
        }
      }
      else {
        for(let i=2; i< pageCount; i++) {
          pagerArr.push(i)
        }
      }

      this.showPrev = showPrev
      this.showNext = showNext

      return pagerArr
    }
  },
  mounted() {
   
  },
  methods: {
    changeCurrentPage(num) {
      if(typeof num !== 'number' || isNaN(num)) { num = 1 }
      //此处就是为了通知$parent 更改page_no,获取数据
      this.$emit('change', num)
   },
   changeNext() {

   },
   changePrev() {

   }
  }
}
</script>

<style lang='less' scoped>
@import "../assets/css/calc.less";
.split-wrap {
  .ul {
    display: flex;
    align-items: center;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      .toVw(width, 54);
      .toVw(height, 54);
      border-radius: 100%;
      background: #fff;
    }
    .act {
      background: #3E96FF;
    }
  }
}
</style>