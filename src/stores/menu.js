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
        const res = await axios.get('http://localhost:10000/menu')
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
