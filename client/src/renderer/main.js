import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import db from './datastore'
import config from './config'
// Import extra dependendies
import 'bulma/css/bulma.css'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

require('electron-titlebar')

// Vue.component('font-awesome-icon', FontAwesomeIcon)

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
