import axios from 'axios';
import { DishesInterface } from 'interfaces/dishes';

export const getDishes = async () => {
  const response = await axios.get(`/api/dishes`);
  return response.data;
};

export const createDishes = async (dishes: DishesInterface) => {
  const response = await axios.post('/api/dishes', dishes);
  return response.data;
};

export const updateDishesById = async (id: string, dishes: DishesInterface) => {
  const response = await axios.put(`/api/dishes/${id}`, dishes);
  return response.data;
};

export const getDishesById = async (id: string) => {
  const response = await axios.get(`/api/dishes/${id}`);
  return response.data;
};
