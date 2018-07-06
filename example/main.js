import App from './App'
import Vue from 'vue'
import Router from 'vue-router'
import Demo from './demo'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'vue-tiny-dropdown',
      component: Demo
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
