// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Bootstrap Axios
Axios.defaults.baseURL = window.AXIOS_BASE_URL ? window.AXIOS_BASE_URL : '/api/'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.interceptors.response.use(
  response => response,
  (error) => {
    return Promise.reject(error)
  })
Vue.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
