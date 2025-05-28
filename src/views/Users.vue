<template>
  <div class="users">
    <h1>Manajemen Pengguna</h1>
    <table>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Email</th>
          <th>Peran</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.nama }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.peran }}</td>
          <td><button>Hapus</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const users = [
  { id: 1, nama: "Budi", email: "budi@mail.com", peran: "Admin" },
  { id: 2, nama: "Sari", email: "sari@mail.com", peran: "Pengguna" },
]
</script>

<style scoped>
.users {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
}
</style>
