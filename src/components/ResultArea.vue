<template>
<!-- resultArea -->
   <div class="result-area">
   <ul class="result-list">
     <li v-for="result in currData" :key="result.sno">
      <p>{{result.sna}}</p>
        <div class="result-info">站點停車格數量:{{result.tot}}</div>
        <div class="result-info">站點目前車輛數:{{result.sbi}}</div>
        <div class="result-info">更新時間:{{result.mday}}</div>
        <div class="result-info">地點:{{result.ar}}</div>
        <div class="result-info">空位數量:{{result.bemp}}</div>
      </li>
   </ul>
   <div class="pag">
   <button v-for="btn in pags" :key="btn" v-on:click="setListData(filterResult, eachPage, btn)">{{btn}}</button>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currPage: 1,
      arrFilter: '',
      eachPage: 10,
      currData: '',
      pags: []
    }
  },
  computed: {
    filterResult () {
      return this.$store.getters.filterResult
    }
  },
  methods: {
    // 處理頁數對應資料
    setListData (all, much, page) {
      // 處理放置資料,第一頁1~10,第二頁10~20..
      if (page > 1) {
        this.arrFilter = all.slice(page - 1 + '0', much * page)
      } else {
        this.arrFilter = all.slice(page - 1, much * page)
      }
      this.currData = this.arrFilter.map(function (item) {
        return item
      })
    },
    setPag (all, much) {
      this.pags = []
      // 計算頁碼數量
      const pagNum = Math.ceil(all.length / much)
      // 每一頁生成一個pagbtn
      for (let i = 1; i <= pagNum; i++) {
        this.pags.push(i)
      }
    }
  },
  watch: {
    filterResult () {
      this.setListData(this.filterResult, this.eachPage, this.currPage)
      this.setPag(this.filterResult, this.eachPage)
    }
  }
}
</script>
