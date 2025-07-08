// stores/menu.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menuList: []
  }),
  actions: {
    async fetchMenu() {
      const res = await axios.get('http://localhost:10000/menu')
      this.menuList = res.data
    }
  }
})
