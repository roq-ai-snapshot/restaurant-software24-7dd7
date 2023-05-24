import axios from 'axios';
import { InventoryInterface } from 'interfaces/inventory';

export const getInventories = async () => {
  const response = await axios.get(`/api/inventories`);
  return response.data;
};

export const createInventory = async (inventory: InventoryInterface) => {
  const response = await axios.post('/api/inventories', inventory);
  return response.data;
};

export const updateInventoryById = async (id: string, inventory: InventoryInterface) => {
  const response = await axios.put(`/api/inventories/${id}`, inventory);
  return response.data;
};

export const getInventoryById = async (id: string) => {
  const response = await axios.get(`/api/inventories/${id}`);
  return response.data;
};
