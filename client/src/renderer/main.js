import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import db from './datastore'
import config from './config'
import VueSocketio from 'vue-socket.io'
// Import extra dependendies
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Notify from 'vue2-notify'
Vue.use(Notify, {
   itemClass: 'notification',
  itemClass: 'alert col-3',
  position: 'top-right'
})
const types = {
  info: { itemClass: 'is-info' },
  error: { itemClass: 'is-danger' },
  warning: { itemClass: 'is-warning' },
  success: { itemClass: 'is-success' }
}
Vue.$notify.setTypes(types)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Listen for sockets
Vue.use(VueSocketio, 'http://localhost:3001')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$db = db
Vue.prototype.$config = config[process.env.NODE_ENV]

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
