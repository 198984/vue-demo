// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueLazyload from 'vue-lazyload'
import VueUi from 'vue-weui'
import VueResource from 'vue-resource'
import '../node_modules/weui/dist/style/weui.css'
Vue.use(VueUi)
Vue.use(VueLazyload)
Vue.use(VueResource)
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: '',
  attempt: 1
})

 // 全局导航钩子
 router.beforeEach((to, from, next) => {
 	
  if (to.meta.requireAuth) {

    // console.log(isEmptyObject(store.state.user)) 
    if(!isEmptyObject(store.state.user)) {   
      next();
    }
    else { 
      next({
        path: '/login',
               query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
           })
    }
  }
  else {
    next();
  }
})

function isEmptyObject(obj) {
  for (var key in obj) {
      return false;
  }
  return true;
}

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
