import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import NotFound from '@/views/404'
import Main from '@/views/Main'
import User from '@/views/User'
import Menu from '@/views/Menu'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      children: [
        {
          path: 'main', component: Main, name: '系统介绍'
        },
        {
          path: 'user', component: User, name: '用户管理'
        },
        {
          path: 'menu', component: Menu, name: '菜单管理'
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    }
  ]
})

router.beforeEach(
  (to, from, next) => {
    // 登录界面登录成功之后，会把用户信息保存在会话
    // 存在时间为会话生命周期，页面关闭即失效。
    let user = sessionStorage.getItem('user')
    if (to.path == '/login') {
      if (user) {
        next({ path: '/' })
      } else {
        next()
      }
    } else {
      if (user) {
        next()
      } else {
        next('/login')
      }
    }
  }
)


export default router;
