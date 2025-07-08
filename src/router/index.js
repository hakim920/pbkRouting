import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Orders from '../views/Orders.vue'
import Login from '../views/Login.vue'
import AdminMenu from '../views/AdminMenu.vue'
import Users from '../views/Users.vue'
import Reports from '../views/Reports.vue'

const routes = [
   { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/menu',
    component: Menu,
    meta: { requiresAuth: true }
  },
  { path: '/home', name: 'Home', component: Home },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/orders', name: 'Orders', component: Orders },
  { path: '/login', name: 'Login', component: Login },
  {
    path: '/admin',
    children: [
      { path: 'menu', name: 'AdminMenu', component: AdminMenu },
      { path: 'users', name: 'Users', component: Users },
      { path: 'reports', name: 'Reports', component: Reports },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else if (to.path === '/login' && isLoggedIn) {
    next('/menu')
  } else {
    next()
  }
})

export default router