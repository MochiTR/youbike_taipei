<template>
  <div id="app">
   <h1 class="title">Taipei YouBike 查詢系統</h1>
   <!-- searchArea -->
   <div class="search-area">
    <label>
      區域
    <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </label>

    <label>
      搜尋
      <input type="text">
    </label>
   </div>
   <!-- resultArea -->
   <div class="result-area">
   <ul>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
   </ul>
  </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss" src="./style.scss"></style>
