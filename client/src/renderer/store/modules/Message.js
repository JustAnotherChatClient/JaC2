/*
  owner: { type: String, ref: 'User' },
  createDate: { type: Date, default: Date.now },
  content: String,
  contentType: String,
  isActive: Boolean,
  deletedBy: { type: String, ref: 'User' }
*/

const state = {
  messages: []
}

const mutations = {
  SET_MESSAGES (state, messages) {
    state.messages = messages
  },
  ADD_MESSAGE (state, message) {
    state.messages.push(message)
  }
}

const getters = {
  getMessages: state => state.messages
}

const actions = {
  async loadMessages (context, $db) {
    return $db.find(messages => {
      context.commit('SET_MESSAGES', messages)
    })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
