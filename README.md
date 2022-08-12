# youbike_taipei

臺北市YouBike站點搜尋

## 前言

> 為什麼會想做這個?

主要是想要練習最近學的東西，增加熟練度，整個實作會用Vue.js(VueX)為主，Api的部分會用Axios來處理

## 功能

依照地區，顯示出該地區的YouBike站點以及資訊(目前剩幾輛車、有幾個空位…)，並使用google map來根據經緯度顯示地圖

## Demo

![taipei_youbike_demo](https://imgur.com/cGDep7q.gif)
![taipei_youbike_RWD_demo](https://imgur.com/g7P905H.gif)


## 資料

>[使用臺北市YouBike的API](https://data.gov.tw/dataset/137993)

##### 欄位說明
+ sno:代號
+ sna:站點名稱
+ tot:站點停車格數量
+ sbi:站點目前車輛數
+ sarea:站點區域
+ mday:更新時間
+ lat, lng:經緯度
+ ar:地點
+ sareaen:站點區域(英文)
+ snaen:站點名稱(英文)
+ bemp:空位數量
+ act:禁用狀態

>[本作品使用的字型-粉圓體](https://justfont.com/huninn/)

## 使用技術
+ Vue (VueX)
+ JavaScript
+ css (Scss)
+ Axios

+ [The Maps Embed API](https://developers.google.com/maps/documentation/embed/map-generator)

## 聲明
僅作為練習之前端作品使用，無任何商業用途
