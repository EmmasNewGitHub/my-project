/*
 * @Description: 
 * @Author: Rabbiter
 * @Date: 2023-03-11 13:37:23
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: "findroom",
    searchSet: {},
    searchTime: {
      inTime: '',
      leaveTime: '',
    },
		bookstat: {
			roomType: '',
			roomid: '',
			inTime: '',
			leaveTime: '',
		}
  },
  mutations: {
    setFind(state) {
      state.position = "findroom";
    },
    setRes(state) {
      state.position = "resveration";
    },
    setMine(state) {
      state.position = "mine";
    }
  },
  actions: {
  },
  modules: {
  }
})
import "../plugins/initialize"
