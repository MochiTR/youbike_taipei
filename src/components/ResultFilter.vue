<template>
<div class="result-filter">
<select v-on:change="filter" v-model="filterType">
    <option value="0" disabled>選擇排序方式</option>
    <option value="1">目前車輛數(高到低)</option>
    <option value="2">目前車輛數(低到高)</option>
    <option value="3">空位數量(高到低)</option>
    <option value="4">空位數量(低到高)</option>
    <option value="5">不排序</option>
</select>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      filterType: '0'
    }
  },
  computed: {
    ...mapGetters(['filterResult'])
  },
  methods: {
    filter () {
    // 選擇排序方式
      switch (+this.filterType) {
        case 1 :
          this.filterResult.sort(this.sortFun1)
          break
        case 2 :
          this.filterResult.sort(this.sortFun2)
          break
        case 3 :
          this.filterResult.sort(this.sortFun3)
          break
        case 4 :
          this.filterResult.sort(this.sortFun4)
          break
        case 5 :
          this.filterResult.sort(this.sortFun5)
          break
      }
      this.$emit('emit-filter', this.filterResult)
    },
    // 目前車輛數(高到低)
    sortFun1 (a, b) {
      return a.sbi < b.sbi ? 1 : a.sbi > b.sbi ? -1 : 0
    },
    // 目前車輛數(低到高)
    sortFun2 (a, b) {
      return a.sbi < b.sbi ? -1 : a.sbi > b.sbi > 0 ? 1 : 0
    },
    // 空位數量(高到低)
    sortFun3 (a, b) {
      return a.bemp < b.bemp ? 1 : a.bemp > b.bemp ? -1 : 0
    },
    // 空位數量(低到高)
    sortFun4 (a, b) {
      return a.bemp < b.bemp ? -1 : a.bemp > b.bemp ? 1 : 0
    },
    // 不排序(預設) id由低到高
    sortFun5 (a, b) {
      return a.sno < b.sno ? -1 : a.sno > b.sno ? 1 : 0
    }
  }
}
</script>
