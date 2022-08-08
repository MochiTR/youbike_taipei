<template>
<!-- searchArea -->
   <div class="search-area">
    <label>
      區域
    <select v-model="currentArea" v-on:change="setCurrentArea">
        <option value="1" disabled>請選擇區域</option>
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
    return {
      currentArea: '1'
    }
  },
  computed: {
    filterData () {
      return this.$store.getters.filterData
    }
  },
  methods: {
    setCurrentArea () {
      this.$store.commit('setCurrentArea', this.currentArea)
    }
  },
  created () {
    this.$store.dispatch('getYouBikeData')
  }
}
</script>
