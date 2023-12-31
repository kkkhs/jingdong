import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import RegisterView from '@/views/register/RegisterView.vue'
import LoginView from '@/views/login/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView,
    beforeEnter: (to, from, next) => { // 每次进入该路由前执行
      const { isLogin } = localStorage
      isLogin ? next({ name: 'HomeView' }) : next()
    }
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
    beforeEnter: (to, from, next) => { // 每次进入该路由前执行
      const { isLogin } = localStorage
      isLogin ? next({ name: 'HomeView' }) : next()
    }
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => { // 每次路由跳转前执行
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'LoginView' || name === 'RegisterView');
  (isLogin || isLoginOrRegister)
    ? next()
    : next({ name: 'LoginView' })
})

export default router
