<template>
<!-- searchArea -->
   <div class="search-area">
    <label>
      區域
    <select>
        <option v-for="(data,index) in filterData" :key="index">{{data}}</option>
      </select>
    </label>

    <label>
      搜尋
      <input type="text">
    </label>
   </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    filterData () {
      return this.$store.getters.filterData
    }
  },
  created () {
    this.$store.dispatch('getYouBikeData')
  }
}
</script>
