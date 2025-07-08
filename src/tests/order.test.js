import { describe, expect, it, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useOrderStore } from '@/stores/order'
import axios from 'axios'

// Mock axios
vi.mock('axios')

describe('Order Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should start with empty orders array', () => {
    const store = useOrderStore()
    expect(store.orders).toEqual([])
  })

  it('should fetch orders from API and update state', async () => {
    const mockOrders = [
      { id: 1, namaMakanan: 'Nasi Goreng', jumlah: 2, status: 'Diproses' },
      { id: 2, namaMakanan: 'Es Teh Manis', jumlah: 1, status: 'Selesai' }
    ]
    
    axios.get.mockResolvedValueOnce({ data: mockOrders })
    const store = useOrderStore()
    await store.fetchOrders()
    expect(store.orders).toEqual(mockOrders)
  })
})
