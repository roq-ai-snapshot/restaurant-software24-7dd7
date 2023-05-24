import { DishesInterface } from 'interfaces/dishes';

export interface MenusInterface {
  id?: string;
  restaurant_id?: string;
  name: string;
  dishes?: DishesInterface[];
}
