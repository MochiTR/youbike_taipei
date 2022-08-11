<template>
<!-- resultArea -->
   <div class="result-area">
      <ResultFilter @emit-filter="changeArrFilter"></ResultFilter>
   <ul class="result-list">
     <li v-for="result in currData" :key="result.sno" title="開啟地圖" v-on:click="$emit('emit-map',result.lat,result.lng)">
      <p v-html="highlight(result.sna)"></p>
        <div class="result-info">站點停車格數量:{{result.tot}}</div>
        <div class="result-info">站點目前車輛數:{{result.sbi}}</div>
        <div class="result-info">更新時間:{{result.mday}}</div>
        <div class="result-info">地點:{{result.ar}}</div>
        <div class="result-info">空位數量:{{result.bemp}}</div>
      </li>
   </ul>
   <div class="pag">
   <button v-if="currData!=''" class="pre_btn" v-on:click="prePag">←</button>
   <section class="pag_group" ref="pag">
   <button v-for="btn in pags" :key="btn" v-on:click="setListData(filterResult, eachPage, btn)" :class="{active:btn === currPage}">{{btn}}</button>
   </section>
   <button v-if="currData!=''" class="pre_btn" v-on:click="nextPag">→</button>
    <div class="pag_info" v-if="currData!=''">目前頁數:{{currPage}} / 總頁數:{{pags.length}}</div>
   </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ResultFilter from './ResultFilter.vue'

export default {
  components: {
    ResultFilter
  },
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
    },
    ...mapState(['keyWord'])
  },
  methods: {
    // 處理頁數對應資料
    setListData (all, much, page) {
      this.currPage = page
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
    },
    highlight (word) {
      return word.replace(new RegExp(this.keyWord, 'g'), `<span class="highlight">${this.keyWord}</span>`)
    },
    // 把排序後的資料傳入
    changeArrFilter (change) {
      this.setListData(change, this.eachPage, this.currPage)
    },
    prePag () {
      if (this.currPage > 1) {
        this.currPage -= 1
        this.$refs.pag.scrollTo({
          left: this.$refs.pag.scrollLeft - 65, behavior: 'smooth'
        })
      }
    },
    nextPag () {
      if (this.currPage < this.pags.length) {
        this.currPage += 1
        this.$refs.pag.scrollTo({
          left: this.$refs.pag.scrollLeft + 65, behavior: 'smooth'
        })
      }
    }
  },
  watch: {
    filterResult () {
      this.currPage = 1
      this.setListData(this.filterResult, this.eachPage, this.currPage)
      this.setPag(this.filterResult, this.eachPage)
    }
  }
}
</script>
