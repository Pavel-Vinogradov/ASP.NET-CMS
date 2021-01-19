import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import './registerServiceWorker'
import dateFilter from '@/filters/date.filter'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style/main.scss'
Vue.config.productionTip = false

Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
