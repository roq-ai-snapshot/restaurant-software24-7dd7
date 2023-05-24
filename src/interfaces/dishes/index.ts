import { OrderItemsInterface } from 'interfaces/order-items';

export interface DishesInterface {
  id?: string;
  menu_id?: string;
  name: string;
  description?: string;
  price: number;
  availability: boolean;
  order_items?: OrderItemsInterface[];
}
