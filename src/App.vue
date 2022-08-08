<template>
  <div id="app">
   <h1 class="title">Taipei YouBike 查詢系統</h1>
  </div>
  <SearchArea></SearchArea>
  <ResultArea></ResultArea>
</template>

<script>
import SearchArea from '@/components/SearchArea.vue'
import ResultArea from '@/components/ResultArea.vue'

export default {
  name: 'App',
  components: {
    SearchArea,
    ResultArea
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
