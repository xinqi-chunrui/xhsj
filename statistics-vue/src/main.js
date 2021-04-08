import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.use(ElementUI);

Vue.prototype.$http = axios;
// axios.interceptors.request.use(config=>{
// 	console.log(config)
// 	config.url = 'api'+config.url;
// 	return config
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
