<template>
  <div class="home">
    <div class="welcome-card">
      <h1>🍽️ Selamat Datang!</h1>
      <p>Aplikasi pemesanan makanan favoritmu!</p>
      <p class="highlight">Lihat menu, pesan makanan lezat, atau login untuk fitur lengkap.</p>
      <button class="cta-button">Lihat Menu</button>
    </div>
  </div>
</template>

<script setup>
// Tidak perlu script untuk halaman ini
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #f8f9fa, #e0f7fa);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.welcome-card {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.welcome-card:hover {
  transform: translateY(-5px);
}

h1 {
  color: #34495e;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

p {
  color: #666;
  font-size: 1.2rem;
  margin: 10px 0;
}

.highlight {
  font-weight: bold;
  color: #00796b;
}

.cta-button {
  margin-top: 20px;
  padding: 10px 25px;
  font-size: 1rem;
  background-color: #00bfa5;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #008e76;
}
</style>
