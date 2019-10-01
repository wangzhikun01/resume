import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/reset.css";/* reset样式 */
import "./assets/font/iconfont.css";  /* 字体样式 */
/*
链接   &#xe602;
向上滑动 &#xe623;
向左  &#xe62b;
向右  &#xe611;
指向下，打开按钮 &#xe6a4;
指向上，关闭按钮 &#xe6a5;
向上滑动 - 2  &#xe56f;
*/

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
