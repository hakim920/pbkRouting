<template>
  <div class="admin-menu">
    <div class="admin-header">
      <div class="header-content">
        <h1>
          <span class="header-icon">🍽️</span>
          Kelola Menu Makanan
        </h1>
        <div class="header-stats">
          <div class="stat-item">
            <span class="stat-number">{{ menuList.length }}</span>
            <span class="stat-label">Menu Aktif</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ totalRevenue.toLocaleString() }}</span>
            <span class="stat-label">Total Harga</span>
          </div>
        </div>
      </div>
    </div>

    <div class="menu-container">
      <ul class="menu-list">
        <li v-for="item in menuList" :key="item.id" class="menu-item" :class="{ 'item-highlighted': item.isPopular }">
          <div class="menu-content">
            <div class="menu-image">
              <span class="food-emoji">{{ getFoodEmoji(item.nama) }}</span>
              <div class="popular-badge" v-if="item.isPopular">⭐ Popular</div>
            </div>
            
            <div class="menu-info">
              <div class="menu-details">
                <strong class="menu-name">{{ item.nama }}</strong>
                <div class="menu-meta">
                  <span class="menu-id">#{{ String(item.id).padStart(3, '0') }}</span>
                  <span class="menu-category">{{ getCategory(item.nama) }}</span>
                </div>
              </div>
              
              <div class="price-section">
                <span class="currency">Rp</span>
                <span class="price">{{ item.harga.toLocaleString() }}</span>
              </div>
            </div>
          </div>
          
          <div class="menu-actions">
            <button class="action-btn edit-btn" @click="editItem(item.id)" title="Edit Menu">
              <span class="btn-icon">✏️</span>
              <span class="btn-text">Edit</span>
            </button>
            <button class="action-btn delete-btn" @click="deleteItem(item.id)" title="Hapus Menu">
              <span class="btn-icon">🗑️</span>
              <span class="btn-text">Hapus</span>
            </button>
          </div>
        </li>
      </ul>
      
      <div class="add-menu-section">
        <button class="add-btn" @click="addNewMenu">
          <span class="add-icon">➕</span>
          <span class="add-text">Tambah Menu Baru</span>
          <span class="add-subtitle">Klik untuk menambah menu makanan</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const menuList = [
  { id: 1, nama: "Nasi Goreng", harga: 25000, isPopular: true },
  { id: 2, nama: "Mie Ayam", harga: 18000, isPopular: false },
]

const totalRevenue = computed(() => {
  return menuList.reduce((sum, item) => sum + item.harga, 0)
})

const getFoodEmoji = (nama) => {
  const emojiMap = {
    'Nasi Goreng': '🍛',
    'Mie Ayam': '🍜',
    'Pizza': '🍕',
    'Burger': '🍔',
    'Sushi': '🍣',
    'Pasta': '🍝'
  }
  return emojiMap[nama] || '🍽️'
}

const getCategory = (nama) => {
  const categoryMap = {
    'Nasi Goreng': 'Nasi',
    'Mie Ayam': 'Mie',
    'Pizza': 'Western',
    'Burger': 'Fast Food',
    'Sushi': 'Japanese',
    'Pasta': 'Italian'
  }
  return categoryMap[nama] || 'Umum'
}

const editItem = (id) => {
  alert(`Mengedit menu dengan ID: ${id}`)
}

const deleteItem = (id) => {
  if (confirm('Apakah Anda yakin ingin menghapus menu ini?')) {
    alert(`Menghapus menu dengan ID: ${id}`)
  }
}

const addNewMenu = () => {
  alert('Membuka form tambah menu baru')
}
</script>

<style scoped>
.admin-menu {
  padding: 30px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
}

.admin-header {
  background: white;
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #667eea;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.admin-header h1 {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #333;
  font-size: 2.2rem;
  margin: 0;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.header-stats {
  display: flex;
  gap: 30px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 20px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 15px;
  color: white;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.stat-number {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
}

.menu-container {
  background: white;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menu-item {
  background: #f8f9fa;
  border-radius: 18px;
  padding: 25px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.menu-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border-color: #667eea;
  background: white;
}

.menu-item:hover::before {
  opacity: 1;
}

.item-highlighted {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border-color: #ffa500;
}

.item-highlighted::before {
  background: linear-gradient(90deg, #ffa500, #ff6b47);
  opacity: 1;
}

.menu-content {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.menu-image {
  position: relative;
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.food-emoji {
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.popular-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: linear-gradient(45deg, #ffa500, #ff6b47);
  color: white;
  font-size: 0.7rem;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(255, 165, 0, 0.4);
}

.menu-info {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.menu-name {
  font-size: 1.4rem;
  color: #333;
  font-weight: 700;
}

.menu-meta {
  display: flex;
  gap: 15px;
  align-items: center;
}

.menu-id {
  background: #e9ecef;
  color: #666;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.menu-category {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.price-section {
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.currency {
  font-size: 1rem;
  color: #666;
  font-weight: 500;
}

.price {
  font-size: 1.6rem;
  font-weight: bold;
  color: #28a745;
  background: linear-gradient(45deg, #28a745, #20c997);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.menu-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.edit-btn {
  background: linear-gradient(45deg, #17a2b8, #20c997);
  color: white;
  box-shadow: 0 3px 10px rgba(23, 162, 184, 0.3);
}

.edit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(23, 162, 184, 0.4);
}

.delete-btn {
  background: linear-gradient(45deg, #dc3545, #e55a5a);
  color: white;
  box-shadow: 0 3px 10px rgba(220, 53, 69, 0.3);
}

.delete-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(220, 53, 69, 0.4);
}

.btn-icon {
  font-size: 1rem;
}

.add-menu-section {
  margin-top: 30px;
  text-align: center;
}

.add-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 30px;
  background: linear-gradient(135deg, #4caf50, #45a049);
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.3);
  position: relative;
  overflow: hidden;
}

.add-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.add-btn:hover::before {
  left: 100%;
}

.add-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(76, 175, 80, 0.4);
}

.add-icon {
  font-size: 2.5rem;
  margin-bottom: 5px;
}

.add-text {
  font-size: 1.3rem;
  font-weight: bold;
}

.add-subtitle {
  font-size: 1rem;
  opacity: 0.9;
  font-weight: normal;
}

/* Responsive Design */
@media (max-width: 768px) {
  .admin-menu {
    padding: 20px 15px;
  }
  
  .header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  
  .admin-header h1 {
    font-size: 1.8rem;
  }
  
  .header-stats {
    width: 100%;
    justify-content: space-around;
  }
  
  .menu-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .menu-info {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .menu-actions {
    width: 100%;
    justify-content: center;
  }
  
  .action-btn {
    flex: 1;
    justify-content: center;
  }
}
</style>