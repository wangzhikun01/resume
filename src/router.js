import Vue from 'vue'
import Router from 'vue-router'
import index from "./views/index"
import skill from "./views/skill"
import experience from "./views/experience"
import product from "./views/product"
import contact from "./views/contact"

Vue.use(Router)

export default new Router({
  routes: [
    { // 首页
      path: '/',
      name: 'index',
      component: index
    },
    { // 首页
      path: '/index',
      name: 'index',
      component: index
    },
    { // 能力
      path: '/skill',
      name: 'skill',
      component: skill
    },
    { // 经历
      path: '/experience',
      name: 'experience',
      component: experience
    },
    { // 作品
      path: '/product',
      name: 'product',
      component: product
    },
    { // 联系
      path: '/contact',
      name: 'contact',
      component: contact
    },
    
  ]
})
