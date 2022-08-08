import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    currentArea: '',
    resultList: [],
    allData: []
  },
  getters: {
    filterData (state) {
      const result = {}

      state.allData.forEach((item) => {
        result[item.sarea] = item.sarea
      })

      return Object.keys(result)
    }
  },
  mutations: {
    setAllData (state, data) {
      state.allData = data
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
