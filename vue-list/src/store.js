import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isMobile: false
    },
    mutations: {
        setIsMobile(state, payload) {
            console.log("====mutations====", payload)
            state.isMobile = payload
        }
    },
    actions: {
        setIsMobile ({ commit, state }, payload) {
            console.log("=====actions=====", payload)
            commit ("setIsMobile", payload)
        }
    }
  })

  export default store