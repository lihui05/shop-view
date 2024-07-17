import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// 引入全局样式
import "@/assets/css/global.css";
// 引入字体图标样式
import "@/assets/font/iconfont.css";

//引入echarts
import * as echarts from "echarts";
// 将echarts挂载到全局
Vue.prototype.$echarts = echarts;

// 引入amfe-flexible
import "amfe-flexible";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
