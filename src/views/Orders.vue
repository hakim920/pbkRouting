<template>
  <div class="orders">
    <div class="orders-header">
      <h1>
        <span class="header-icon">📋</span>
        Pesanan Saya
      </h1>
      <div class="orders-count">{{ orders.length }} pesanan</div>
    </div>
    
    <div v-if="orders.length === 0" class="empty-state">
      <div class="empty-icon">🍽️</div>
      <p class="empty-message">Belum ada pesanan.</p>
      <p class="empty-submessage">Mulai pesan makanan favorit Anda!</p>
    </div>
    
    <ul v-else class="orders-list">
      <li v-for="order in orders" :key="order.id" class="order-item" :class="getStatusClass(order.status)">
        <div class="order-header">
          <div class="food-info">
            <span class="food-icon">🍛</span>
            <h3 class="food-name">{{ order.namaMakanan }}</h3>
          </div>
          <div class="status-badge" :class="getStatusBadgeClass(order.status)">
            <span class="status-icon">{{ getStatusIcon(order.status) }}</span>
            <span class="status-text">{{ order.status }}</span>
          </div>
        </div>
        
        <div class="order-details">
          <div class="detail-item">
            <span class="detail-label">Jumlah:</span>
            <span class="detail-value">{{ order.jumlah }} porsi</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Order ID:</span>
            <span class="detail-value">#{{ String(order.id).padStart(4, '0') }}</span>
          </div>
        </div>
        
        <div class="order-actions">
          <button class="btn btn-track" @click="trackOrder(order.id)">
            <span class="btn-icon">📍</span>
            Lacak Pesanan
          </button>
          <button class="btn btn-reorder" @click="reorder(order.id)">
            <span class="btn-icon">🔄</span>
            Pesan Lagi
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const orders = [
  { id: 1, namaMakanan: "Nasi Goreng", jumlah: 2, status: "Diproses" },
  { id: 2, namaMakanan: "Es Teh Manis", jumlah: 1, status: "Selesai" },
]

const getStatusClass = (status) => {
  return {
    'status-processing': status === 'Diproses',
    'status-completed': status === 'Selesai',
    'status-cancelled': status === 'Dibatalkan'
  }
}

const getStatusBadgeClass = (status) => {
  return {
    'badge-processing': status === 'Diproses',
    'badge-completed': status === 'Selesai',
    'badge-cancelled': status === 'Dibatalkan'
  }
}

const getStatusIcon = (status) => {
  const icons = {
    'Diproses': '⏳',
    'Selesai': '✅',
    'Dibatalkan': '❌'
  }
  return icons[status] || '📋'
}

const trackOrder = (orderId) => {
  alert(`Melacak pesanan #${String(orderId).padStart(4, '0')}`)
}

const reorder = (orderId) => {
  alert(`Memesan ulang pesanan #${String(orderId).padStart(4, '0')}`)
}
</script>

<style scoped>
.orders {
  padding: 30px;
  max-width: 900px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

.orders-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px 0;
  border-bottom: 3px solid transparent;
  background: linear-gradient(90deg, #667eea, #764ba2) padding-box,
              linear-gradient(90deg, #667eea, #764ba2) border-box;
  border-image: linear-gradient(90deg, #667eea, #764ba2) 1;
}

.orders-header h1 {
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

.orders-count {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.7;
}

.empty-message {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 10px;
  font-weight: bold;
}

.empty-submessage {
  color: #999;
  font-size: 1.1rem;
}

.orders-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-item {
  background: white;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 5px solid #ddd;
  position: relative;
  overflow: hidden;
}

.order-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.order-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.order-item:hover::before {
  opacity: 1;
}

.status-processing {
  border-left-color: #ffa500;
}

.status-completed {
  border-left-color: #28a745;
}

.status-cancelled {
  border-left-color: #dc3545;
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.food-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.food-icon {
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.food-name {
  margin: 0;
  color: #333;
  font-size: 1.4rem;
  font-weight: bold;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 0.9rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.badge-processing {
  background: linear-gradient(45deg, #ffa500, #ffb347);
  color: white;
}

.badge-completed {
  background: linear-gradient(45deg, #28a745, #40c463);
  color: white;
}

.badge-cancelled {
  background: linear-gradient(45deg, #dc3545, #e55a5a);
  color: white;
}

.status-icon {
  font-size: 1.1rem;
}

.order-details {
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 12px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.detail-label {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

.detail-value {
  font-weight: bold;
  color: #333;
  font-size: 1.1rem;
}

.order-actions {
  display: flex;
  gap: 15px;
  justify-content: flex-end;
}

.btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.btn-track {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);
}

.btn-track:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.btn-reorder {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-reorder:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .orders {
    padding: 20px 15px;
  }
  
  .orders-header {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
  
  .orders-header h1 {
    font-size: 1.8rem;
  }
  
  .order-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .order-details {
    flex-direction: column;
    gap: 15px;
  }
  
  .order-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .btn {
    justify-content: center;
    width: 100%;
  }
}
</style>