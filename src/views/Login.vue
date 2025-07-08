<template>
  <div class="login">
    <div class="login-container">
      <div class="login-header">
        <div class="logo">
          <span class="logo-icon">🍽️</span>
          <span class="logo-text">FoodieApp</span>
        </div>
        <h1>Selamat Datang Kembali!</h1>
        <p class="subtitle">Masuk untuk melanjutkan petualangan kuliner Anda</p>
      </div>
      
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label for="email">
            <span class="label-icon">📧</span>
            Email
          </label>
          <div class="input-wrapper">
            <input 
              id="email"
              type="email" 
              v-model="email" 
              required 
              placeholder="Masukkan email Anda"
              :class="{ 'input-focused': isEmailFocused }"
              @focus="isEmailFocused = true"
              @blur="isEmailFocused = false"
            />
            <span class="input-icon">👤</span>
          </div>
        </div>
        
        <div class="form-group">
          <label for="password">
            <span class="label-icon">🔒</span>
            Password
          </label>
          <div class="input-wrapper">
            <input 
              id="password"
              :type="showPassword ? 'text' : 'password'" 
              v-model="password" 
              required 
              placeholder="Masukkan password Anda"
              :class="{ 'input-focused': isPasswordFocused }"
              @focus="isPasswordFocused = true"
              @blur="isPasswordFocused = false"
            />
            <button 
              type="button" 
              class="toggle-password"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? '🙈' : '👁️' }}
            </button>
          </div>
        </div>
        
        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" v-model="rememberMe">
            <span class="checkmark"></span>
            Ingat saya
          </label>
          <a href="#" class="forgot-password">Lupa password?</a>
        </div>
        
        <button type="submit" class="login-btn" :class="{ 'btn-loading': isLoading }">
          <span v-if="!isLoading" class="btn-content">
            <span class="btn-icon">🚀</span>
            Masuk
          </span>
          <span v-else class="btn-loading-content">
            <span class="spinner"></span>
            Memproses...
          </span>
        </button>
        
        <div class="signup-link">
          <p>Belum punya akun? <a href="#" class="signup-btn">Daftar sekarang</a></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)
const isEmailFocused = ref(false)
const isPasswordFocused = ref(false)
const isLoading = ref(false)

const router = useRouter()
const auth = useAuthStore()

const login = async () => {
  isLoading.value = true

  setTimeout(() => {
    const success = auth.login(email.value, password.value)
    isLoading.value = false

    if (success) {
      if (auth.user.role === 'admin') {
        router.push('/admin-menu')
      } else {
        router.push('/home')
      }
    } else {
      alert('Email atau password salah!')
    }
  }, 1000)
}
</script>


<style scoped>
.login {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.login::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(120deg); }
  66% { transform: translate(-20px, 20px) rotate(240deg); }
}

.login-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  padding: 40px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  max-width: 450px;
  width: 100%;
  position: relative;
  z-index: 1;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.login-header {
  text-align: center;
  margin-bottom: 35px;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
}

.logo-icon {
  font-size: 3rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.logo-text {
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.login-header h1 {
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 8px;
  font-weight: 700;
}

.subtitle {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
}

.label-icon {
  font-size: 1.1rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

input {
  width: 100%;
  padding: 15px 50px 15px 20px;
  border: 2px solid #e1e5e9;
  border-radius: 15px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafbfc;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  transform: translateY(-2px);
}

.input-focused {
  border-color: #667eea !important;
  background: white !important;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
  transform: translateY(-2px) !important;
}

input::placeholder {
  color: #a0a6b1;
  font-size: 0.95rem;
}

.input-icon {
  position: absolute;
  right: 15px;
  font-size: 1.2rem;
  color: #a0a6b1;
  transition: color 0.3s ease;
}

.input-focused + .input-icon {
  color: #667eea;
}

.toggle-password {
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.toggle-password:hover {
  background: rgba(102, 126, 234, 0.1);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #666;
}

.remember-me input[type="checkbox"] {
  display: none;
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  position: relative;
  transition: all 0.3s ease;
}

.remember-me input[type="checkbox"]:checked + .checkmark {
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-color: #667eea;
}

.remember-me input[type="checkbox"]:checked + .checkmark::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.forgot-password {
  color: #667eea;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.forgot-password:hover {
  color: #764ba2;
  text-decoration: underline;
}

.login-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  position: relative;
  overflow: hidden;
}

.login-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.login-btn:hover::before {
  left: 100%;
}

.login-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
}

.btn-loading {
  pointer-events: none;
  opacity: 0.8;
}

.btn-content, .btn-loading-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.divider {
  position: relative;
  text-align: center;
  margin: 25px 0;
  color: #999;
  font-size: 0.9rem;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #e1e5e9;
  z-index: 0;
}

.divider span {
  background: rgba(255, 255, 255, 0.95);
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  background: white;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.google-btn:hover {
  border-color: #db4437;
  background: #db4437;
  color: white;
}

.facebook-btn:hover {
  border-color: #4267B2;
  background: #4267B2;
  color: white;
}

.social-icon {
  font-size: 1.2rem;
}

.signup-link {
  text-align: center;
  margin-top: 20px;
}

.signup-link p {
  color: #666;
  font-size: 0.95rem;
  margin: 0;
}

.signup-btn {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.signup-btn:hover {
  color: #764ba2;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 480px) {
  .login-container {
    padding: 30px 25px;
    margin: 10px;
  }
  
  .logo-text {
    font-size: 1.6rem;
  }
  
  .login-header h1 {
    font-size: 1.5rem;
  }
  
  input {
    padding: 12px 45px 12px 15px;
  }
  
  .social-login {
    gap: 10px;
  }
  
  .social-btn {
    padding: 10px;
    font-size: 0.9rem;
  }
}
</style>