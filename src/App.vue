<template>
  <div id="app">
   <h1 class="title">Taipei YouBike 查詢系統</h1>
  <LightBox ref="lightbox"></LightBox>
  <SearchArea></SearchArea>
  <ResultArea @emit-map="openLightbox"></ResultArea>
  </div>
</template>

<script>
import SearchArea from '@/components/SearchArea.vue'
import ResultArea from '@/components/ResultArea.vue'
import LightBox from './components/LightBox.vue'

export default {
  name: 'App',
  components: {
    SearchArea,
    ResultArea,
    LightBox
  },
  methods: {
    openLightbox (lat, lng) {
      this.$refs.lightbox.showLightbox(lat, lng)
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
