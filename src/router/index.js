import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Orders from '../views/Orders.vue'
import Login from '../views/Login.vue'
import AdminMenu from '../views/AdminMenu.vue'
import Users from '../views/Users.vue'
import Reports from '../views/Reports.vue'
import { useAuthStore } from '../stores/auth'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home },

  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
    meta: { requiresAuth: true }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: { requiresAuth: true }
  },

  {
    path: '/admin',
    children: [
      { path: 'menu', name: 'AdminMenu', component: AdminMenu },
      { path: 'users', name: 'Users', component: Users },
      { path: 'reports', name: 'Reports', component: Reports },
    ],
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isLoggedIn = authStore.isLoggedIn

  // Blokir akses ke halaman tertentu jika belum login
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else if (to.path === '/login' && isLoggedIn) {
    next('/home')
  } else {
    next()
  }
})

export default router
