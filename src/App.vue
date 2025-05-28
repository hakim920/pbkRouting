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
          <router-link to="/login" class="nav-link login-btn">
            <span class="nav-icon">🔐</span>
            Login
          </router-link>
        </div>
      </div>
    </nav>
    
    <div class="divider"></div>

    <router-view />
  </div>
</template>

<script setup>
// Tidak perlu logic tambahan di sini untuk versi sederhana
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 70px;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-weight: bold;
  font-size: 1.3rem;
}

.brand-icon {
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.brand-text {
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 5px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.nav-icon {
  font-size: 1.1rem;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
}

.login-btn {
  background: linear-gradient(45deg, #ff6b6b, #ffa500);
  color: white !important;
  margin-left: 10px;
  box-shadow: 0 3px 10px rgba(255, 107, 107, 0.3);
}

.login-btn:hover {
  background: linear-gradient(45deg, #ff5252, #ff9500);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
}

.router-link-active {
  background: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.router-link-active.login-btn {
  background: linear-gradient(45deg, #ff5252, #ff9500) !important;
}

.divider {
  height: 3px;
  background: linear-gradient(90deg, #ff6b6b, #ffa500, #667eea, #764ba2);
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    height: auto;
    padding: 15px 20px;
    gap: 15px;
  }
  
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }
  
  .nav-link {
    font-size: 0.9rem;
    padding: 10px 15px;
  }
  
  .brand-text {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .nav-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    width: 100%;
  }
  
  .nav-link {
    justify-content: center;
    text-align: center;
  }
  
  .login-btn {
    grid-column: span 2;
    margin-left: 0;
  }
}
</style>