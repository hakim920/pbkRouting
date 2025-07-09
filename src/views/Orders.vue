<template>
  <div class="orders">
    <h1>Pesanan Kamu</h1>
    <ul>
      <li v-for="item in menuStore.orders" :key="item.id" class="order-item">
        <h3>{{ item.nama }}</h3>
        <p>{{ item.deskripsi }}</p>
        <strong>Rp {{ item.harga.toLocaleString() }}</strong>
      </li>
    </ul>
    <div v-if="menuStore.orders.length === 0">
      <p>Kamu belum memesan makanan apapun.</p>
    </div>
  </div>
</template>

<script setup>
import { useMenuStore } from '@/stores/menu'
const menuStore = useMenuStore()
</script>

<style scoped>
.order-item {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 12px;
  border-radius: 10px;
}
</style>
