// stores/menu.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menuList: [],
    orders: []
  }),
  actions: {
    async fetchMenu() {
      try {
        const res = await axios.get('https://7dbb3108-9e33-4885-835e-7a34bc4cf886-00-25zlxpj3v95i3.sisko.replit.dev/menu')
        this.menuList = res.data
      } catch (err) {
        console.error('Gagal fetch menu:', err)
      }
    },
    addOrder(item) {
      this.orders.push(item)
    }
  }
})
