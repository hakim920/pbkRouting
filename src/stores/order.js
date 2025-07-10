// src/stores/order.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useOrderStore = defineStore('order', {
  state: () => ({
    orders: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchOrders() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('https://7dbb3108-9e33-4885-835e-7a34bc4cf886-00-25zlxpj3v95i3.sisko.replit.dev/orders')
        this.orders = response.data
      } catch (err) {
        this.error = 'Gagal mengambil data pesanan'
        console.error(err)
      } finally {
        this.loading = false
      }
    }
  }
})
