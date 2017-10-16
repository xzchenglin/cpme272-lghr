// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import session from 'vue-session'
import resource from 'vue-resource'
//import VueLocalStorage from 'vue-localstorage'

const lghrAPI = require("./lghr-api")

Vue.use(session)
//Vue.use(VueLocalStorage)
Vue.use(resource)

Vue.use(lghrAPI)
//Vue.use(lghrAPI, { router: router })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
