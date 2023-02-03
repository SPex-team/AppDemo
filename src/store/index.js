import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userAddress: null,
    provider: null,
    contract: null,
  },
  mutations: {
    setUserAddress(state, userAddress) {
      state.userAddress = userAddress
    },
    setProvider(state, provider) {
      state.provider = provider
    },
    setContract(state, contract) {
      state.contract = contract
    }
  },
  actions: {
  },
  modules: {
  }
})
