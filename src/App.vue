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
   <ul class="result-list">
     <li>
      <p>YouBike2.0_捷運科技大樓站</p>
        <div class="result-info">站點停車格數量:28</div>
        <div class="result-info">站點目前車輛數:9</div>
        <div class="result-info">更新時間:2022-08-08 12:41:13</div>
        <div class="result-info">地點:復興南路二段235號前</div>
        <div class="result-info">空位數量:19</div>
      </li>
     <li>
      <p>YouBike2.0_捷運科技大樓站</p>
        <div class="result-info">站點停車格數量:28</div>
        <div class="result-info">站點目前車輛數:9</div>
        <div class="result-info">更新時間:2022-08-08 12:41:13</div>
        <div class="result-info">地點:復興南路二段235號前</div>
        <div class="result-info">空位數量:19</div>
      </li>
      <li>
      <p>YouBike2.0_捷運科技大樓站</p>
        <div class="result-info">站點停車格數量:28</div>
        <div class="result-info">站點目前車輛數:9</div>
        <div class="result-info">更新時間:2022-08-08 12:41:13</div>
        <div class="result-info">地點:復興南路二段235號前</div>
        <div class="result-info">空位數量:19</div>
      </li>
      <li>
      <p>YouBike2.0_捷運科技大樓站</p>
        <div class="result-info">站點停車格數量:28</div>
        <div class="result-info">站點目前車輛數:9</div>
        <div class="result-info">更新時間:2022-08-08 12:41:13</div>
        <div class="result-info">地點:復興南路二段235號前</div>
        <div class="result-info">空位數量:19</div>
      </li>
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
