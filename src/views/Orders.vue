<script setup>
import { onMounted } from 'vue'
import { useOrderStore } from '@/stores/order'

const orderStore = useOrderStore()

onMounted(() => {
  orderStore.fetchOrders()
})

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

<template>
  <div class="orders">
    <div class="orders-header">
      <h1>
        <span class="header-icon">📋</span>
        Pesanan Saya
      </h1>
      <div class="orders-count">{{ orderStore.orders.length }} pesanan</div>
    </div>

    <div v-if="orderStore.orders.length === 0" class="empty-state">
      <div class="empty-icon">🍽️</div>
      <p class="empty-message">Belum ada pesanan.</p>
      <p class="empty-submessage">Mulai pesan makanan favorit Anda!</p>
    </div>

    <ul v-else class="orders-list">
      <li v-for="order in orderStore.orders" :key="order.id" class="order-item" :class="getStatusClass(order.status)">
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

<style scoped>
.orders {
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
  background: #f5f7fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.orders-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ccc;
}

.orders-header h1 {
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #333;
  gap: 10px;
}

.orders-count {
  background-color: #667eea;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.empty-state {
  text-align: center;
  padding: 80px 20px;
  background: #fff;
  border-radius: 16px;
  border: 1px dashed #ccc;
  color: #666;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 10px;
}

.empty-message {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.empty-submessage {
  font-size: 1.1rem;
  color: #999;
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
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  border-left: 6px solid #e0e0e0;
}

.order-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.status-processing {
  border-left-color: #ffc107;
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
  font-size: 1.6rem;
}

.food-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.badge-processing {
  background-color: #ffe08a;
  color: #856404;
}

.badge-completed {
  background-color: #c8f7c5;
  color: #155724;
}

.badge-cancelled {
  background-color: #f8d7da;
  color: #721c24;
}

.order-details {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 10px;
  background: #f1f3f5;
  border-radius: 10px;
}

.detail-item {
  flex: 1;
  min-width: 150px;
}

.detail-label {
  font-size: 0.85rem;
  color: #666;
}

.detail-value {
  font-size: 1.05rem;
  font-weight: bold;
  color: #333;
}

.order-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
}

.btn {
  padding: 10px 16px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.btn-track {
  background: #667eea;
  color: white;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.btn-track:hover {
  background: #5a67d8;
}

.btn-reorder {
  background: white;
  border: 2px solid #667eea;
  color: #667eea;
}

.btn-reorder:hover {
  background: #667eea;
  color: white;
}
</style>
