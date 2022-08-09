import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    // 選擇的區域
    currentArea: '',
    // 所有YouBike資料
    allData: [],
    // 搜尋的名稱
    keyWord: ''
  },
  getters: {
    // 將allData過濾(無重複名稱)
    filterData (state) {
      const result = {}

      state.allData.forEach((item) => {
        result[item.sarea] = item.sarea
      })

      return Object.keys(result)
    },
    // 將allData過濾(currentArea/keyWord)
    filterResult (state) {
      if (state.keyWord) {
        return state.allData.filter(function (item) {
          return item.sna.match(state.keyWord)
        })
      } else {
        return state.allData.filter(function (item) {
          return item.sarea === state.currentArea
        })
      }
    }
  },
  mutations: {
    setAllData (state, data) {
      state.allData = data
    },
    setCurrentArea (state, data) {
      state.currentArea = data
    },
    setKeyWord (state, data) {
      state.keyWord = data
    }
  },
  actions: {
    getYouBikeData (context) {
      axios.get('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json')
        .then(function (response) {
          context.commit('setAllData', response.data)
        })
    }
  },
  modules: {
  }
})
