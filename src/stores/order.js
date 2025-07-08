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
        const response = await axios.get('http://localhost:10000/orders')
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
