import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入elementUI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入axios
import axios from 'axios';

//使用
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//定义一个组件
