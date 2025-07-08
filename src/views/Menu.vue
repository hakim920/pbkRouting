<script setup>
import { onMounted } from 'vue'
import { useMenuStore } from '@/stores/menu'

const menuStore = useMenuStore()

onMounted(() => {
  menuStore.fetchMenu()
})
</script>

<template>
  <div class="menu">
    <h1>Daftar Menu Makanan</h1>
    <ul>
      <li v-for="item in menuStore.menuList" :key="item.id">
        <h3>{{ item.nama }}</h3>
        <p>{{ item.deskripsi }}</p>
        <strong>Rp {{ item.harga.toLocaleString() }}</strong>
      </li>
    </ul>
  </div>
</template>
