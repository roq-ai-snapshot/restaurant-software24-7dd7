import axios from 'axios';
import { PromotionsInterface } from 'interfaces/promotions';

export const getPromotions = async () => {
  const response = await axios.get(`/api/promotions`);
  return response.data;
};

export const createPromotions = async (promotions: PromotionsInterface) => {
  const response = await axios.post('/api/promotions', promotions);
  return response.data;
};

export const updatePromotionsById = async (id: string, promotions: PromotionsInterface) => {
  const response = await axios.put(`/api/promotions/${id}`, promotions);
  return response.data;
};

export const getPromotionsById = async (id: string) => {
  const response = await axios.get(`/api/promotions/${id}`);
  return response.data;
};
