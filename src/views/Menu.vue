<template>
  <div class="menu">
    <h1>Daftar Menu Makanan</h1>
    <ul class="menu-list">
      <li v-for="item in menuStore.menuList" :key="item.id" class="menu-item">
        <div>
          <h3>{{ item.nama }}</h3>
          <p>{{ item.deskripsi }}</p>
          <strong>Rp {{ item.harga.toLocaleString() }}</strong>
        </div>
        <button @click="menuStore.addOrder(item)">Pesan</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMenuStore } from '@/stores/menu'

const menuStore = useMenuStore()

onMounted(() => {
  menuStore.fetchMenu()
})
</script>

<style scoped>
.menu-item {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  background-color: #00b894;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
button:hover {
  background-color: #019875;
}
</style>
