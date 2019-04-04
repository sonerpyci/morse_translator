// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketIO from 'vue-socket.io'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
const portNumber = process.env.SERVER_PORT || 3000
console.log('Vue client now tries to connect port :', portNumber.toString())
Vue.use(VueSocketIO, (process.env.HEROKU_URL ? 'https://' + process.env.HEROKU_URL : 'http://localhost') + ':' + (portNumber ? portNumber.toString() : '3000') + '/')
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
