/**
 * Created by hasee on 2017/9/23.
 */
import Vue from 'vue'
import vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(vuex)
const state = {
  videoID: Number,
  recordID: Number,
  recordClass: String
}
const getters = {
  videoID: state => state.videoID,
  recordID: start => state.recordID
}
const mutations = {
  [types.RECORD_ID](state, {obj}) {
    state.recordID = state.videoID[obj[0]]
    state.recordClass = obj[1]
    console.log(obj)
    console.log(state.videoID)
    console.log(state.videoID[obj[0]])
    console.log(state.recordID)
    console.log(state.recordClass)
  }
}
const actions = {
  recordID({commit, state}, obj) {
    if (state.videoID) {
      commit(types.RECORD_ID, {obj})
    }
  }
}

export default new vuex.Store(
  {
    state,
    getters,
    mutations,
    actions
  }
)
