// src/stores/auth.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

  // Akun-akun simulasi
  const users = [
    {
      email: 'admin@foodie.com',
      password: 'admin123',
      role: 'admin'
    },
    {
      email: 'user@foodie.com',
      password: 'user123',
      role: 'user'
    }
  ]

  const login = (email, password) => {
    const found = users.find(u => u.email === email && u.password === password)
    if (found) {
      user.value = {
        email: found.email,
        role: found.role
      }
      return true
    } else {
      return false
    }
  }

  const logout = () => {
    user.value = null
  }

  const isLoggedIn = computed(() => user.value !== null)
  const getAllUsers = computed(() => users)

return {
  user,
  isLoggedIn,
  login,
  logout,
  getAllUsers
}
})
