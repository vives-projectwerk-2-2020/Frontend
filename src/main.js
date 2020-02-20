import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Admin from './Administration.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')


new Vue({
  vuetify,
  render: h => h(Admin)
}).$mount('#admin')
