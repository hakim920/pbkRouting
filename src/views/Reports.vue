<template>
  <div class="reports">
    <h1>Laporan Pemesanan</h1>
    <table>
      <thead>
        <tr>
          <th>Tanggal</th>
          <th>Menu</th>
          <th>Jumlah</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in laporan" :key="item.id">
          <td>{{ item.tanggal }}</td>
          <td>{{ item.menu }}</td>
          <td>{{ item.jumlah }}</td>
          <td>Rp {{ item.total.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const laporan = [
  { id: 1, tanggal: "2025-05-26", menu: "Nasi Goreng", jumlah: 2, total: 50000 },
  { id: 2, tanggal: "2025-05-26", menu: "Mie Ayam", jumlah: 1, total: 18000 },
]
</script>

<style scoped>
.reports {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}
</style>
