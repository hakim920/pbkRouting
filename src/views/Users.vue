<template>
  <div class="users">
    <h1>Manajemen Pengguna</h1>
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Role</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in userList" :key="index">
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td><button @click="hapus(index)">Hapus</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

// Gunakan salinan array agar tidak mengubah data asli
const userList = computed(() => [...auth.getAllUsers])

const hapus = (index) => {
  alert(`Fitur hapus pengguna belum tersedia (index ${index})`)
}
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
