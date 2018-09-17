import axios from 'axios'
import config from '../../config'
const conf = config[process.env.NODE_ENV]

const state = {
  users: [],
  user: {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    friends: [],
    isActive: true
  }
}

const getters = {
  getUser: state => state.user
}

const mutations = {
  SET_USER (state, user) {
    state.user.username = user.username
    state.user.email = user.email
    state.user.firstName = user.firstName
    state.user.lastName = user.lastName
    state.user.friends = user.friends
    state.user.isActive = user.isActive
  },
  SET_USERS (state, users) {
    state.users = users
  }
}

const actions = {
  async getUsers (context) {
    return axios.get(`${conf.backend}/api/users`)
      .then(res => res.data)
      .then(json => context.commit('SET_USERS', json.data))
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
