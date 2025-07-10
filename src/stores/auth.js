import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isLoggedIn = computed(() => user.value !== null)

  // Ganti URL ini jika port json-server kamu beda
  const apiURL = 'https://7dbb3108-9e33-4885-835e-7a34bc4cf886-00-25zlxpj3v95i3.sisko.replit.dev/user'
  const setUser = (data) => {
  user.value = data
}

  const login = async (email, password) => {
    try {
      const response = await axios.get(apiURL)
      const users = response.data


      const found = users.find(u => u.username === email && u.password === password)
      if (found) {
        user.value = {
          id: found.id,
          email: found.username,
          password: found.password,
          role: found.role || 'user' // Default ke "user" jika tidak ada role
        }
        return true
      } else {
        return false
      }
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  const logout = () => {
    user.value = null
  }

  return {
  user,
  isLoggedIn,
  login,
  logout,
  setUser
}

})
