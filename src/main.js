import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/display.css';
import router from "./router/index";
import store from "./store/index";
import axios from "axios";

Vue.use(ElementUI);
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://360tovisit.starfruit.com.vn/api/v1';



new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')