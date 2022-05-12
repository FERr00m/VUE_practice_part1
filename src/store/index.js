import { createStore, createLogger } from 'vuex'
import counterModule from './modules/counter'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

export default createStore({
  plugins: [createLogger()],
  modules: {
    count: counterModule
  },
  mutations,
  actions,
  state: {
    appTitle: 'Vuex working'
  },
  getters: {
    uppercaseTitle (state) {
      return state.appTitle.toUpperCase()
    }
  }
})
