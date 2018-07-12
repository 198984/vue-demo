import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'

Vue.use(Router)
Router.prototype.openPage = function (link, query) {
  this.push({
    path: link,
    query: _.assignIn({
      time: new Date().getTime()
    }, query || {})
  })
}

export default new Router({
  routes: [
    {
      path: '/', 
      redirect: '/home' 
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        // 添加该字段，表示进入这个路由是需要登录的
         requireAuth: true,  
        },
      component(resolve){
        require(['@/views/home/index.vue'], resolve)
      }
    },
    {
      path: '/login',
      name: 'login',
      component(resolve){
        require(['@/views/login/index.vue'], resolve)
      }
    }     
  ]
})


