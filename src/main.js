import Vue from 'vue'
import App from './App.vue'

import blod from './index.js'
Vue.use(blod)

new Vue({
  el: '#app',
  render: h => h(App)
})
