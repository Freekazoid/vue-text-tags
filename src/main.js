import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(vuetify, {
  iconfont: 'md'
});

new Vue({
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
