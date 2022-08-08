<template>
<!-- resultArea -->
   <div class="result-area">
   <ul class="result-list">
     <li v-for="result in filterResult" :key="result.sno">
      <p>{{result.sna}}</p>
        <div class="result-info">站點停車格數量:{{result.tot}}</div>
        <div class="result-info">站點目前車輛數:{{result.sbi}}</div>
        <div class="result-info">更新時間:{{result.mday}}</div>
        <div class="result-info">地點:{{result.ar}}</div>
        <div class="result-info">空位數量:{{result.bemp}}</div>
      </li>
   </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    filterResult () {
      return this.$store.getters.filterResult
    }
  }
}
</script>
