<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <span class="brand-icon">🍽️</span>
          <span class="brand-text">FoodieApp</span>
        </div>

        <div class="nav-links">
          <router-link to="/home" class="nav-link">
            <span class="nav-icon">🏠</span>
            Beranda
          </router-link>
          <router-link to="/orders" class="nav-link">
            <span class="nav-icon">📋</span>
            Pemesanan
          </router-link>

          <!-- Menu khusus admin -->
          <template v-if="auth.user?.role === 'admin'">
            <router-link to="/admin-menu" class="nav-link">
              <span class="nav-icon">⚙️</span>
              Kelola Menu
            </router-link>
            <router-link to="/users" class="nav-link">
              <span class="nav-icon">👥</span>
              Pengguna
            </router-link>
            <router-link to="/reports" class="nav-link">
              <span class="nav-icon">📊</span>
              Laporan
            </router-link>
          </template>

          <!-- Login/Logout -->
          <router-link
            v-if="!auth.isLoggedIn"
            to="/login"
            class="nav-link login-btn"
          >
            <span class="nav-icon">🔐</span>
            Login
          </router-link>

          <button 
            v-else 
            @click="logout" 
            class="nav-link login-btn"
          >
            <span class="nav-icon">🚪</span>
            Logout
          </button>

        </div>
      </div>
    </nav>

    <div class="divider"></div>

    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const router = useRouter()

const logout = () => {
  auth.logout()
  router.push('/login')
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  background-color: #4a90e2;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 60px;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
}

.brand-icon {
  font-size: 1.5rem;
}

.brand-text {
  color: #fff;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  text-decoration: none;
  color: #fff;
  border-radius: 6px;
  transition: background 0.2s ease;
  font-size: 0.95rem;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-icon {
  font-size: 1rem;
}

.login-btn {
  background-color: #ff6b6b;
  color: #fff !important;
}

.login-btn:hover {
  background-color: #e85a5a;
}

.router-link-active {
  background-color: rgba(255, 255, 255, 0.3);
  font-weight: bold;
}

.divider {
  height: 2px;
  background-color: #ff6b6b;
  opacity: 0.7;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 16px;
    gap: 12px;
  }

  .nav-links {
    flex-wrap: wrap;
    gap: 8px;
  }

  .nav-link {
    font-size: 0.9rem;
    padding: 6px 10px;
  }
}

@media (max-width: 480px) {
  .nav-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 8px;
  }

  .nav-link {
    justify-content: center;
  }

  .login-btn {
    grid-column: span 2;
  }
}

</style>