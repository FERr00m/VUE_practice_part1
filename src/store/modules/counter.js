export default {
  namespaced: true,
  state: {
    counter: 1
  },
  getters: {
    counter (state) {
      // if (state.counter > 50) {
      //   return 0
      // }
      return state.counter
    },
    doubleCounter (_, getters, rootState, rootGetters) {
      return getters.counter * 2
    }
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    add (state, payload) {
      state.counter += payload.value
    }
  },
  actions: {
    incrementAsync ({ commit }, payload) {
      setTimeout(() => {
        commit('add', {
          value: payload.value
        })
      }, payload.time)
    }
  }
}
