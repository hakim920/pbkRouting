<template>
  <div class="menu">
    <h1>Daftar Menu Makanan</h1>
    <ul>
      <li v-for="item in menuList" :key="item.id">
        <h3>{{ item.nama }}</h3>
        <p>{{ item.deskripsi }}</p>
        <strong>Rp {{ item.harga.toLocaleString() }}</strong>
      </li>
    </ul>
  </div>
</template>

<script setup>
const menuList = [
  { id: 1, nama: "Nasi Goreng", deskripsi: "Nasi goreng spesial dengan ayam dan telur", harga: 25000 },
  { id: 2, nama: "Mie Ayam", deskripsi: "Mie ayam dengan topping melimpah", harga: 18000 },
  { id: 3, nama: "Es Teh Manis", deskripsi: "Minuman segar pelepas dahaga", harga: 5000 },
]
</script>

<style scoped>
.menu {
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>
