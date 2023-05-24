import { FeedbacksInterface } from 'interfaces/feedbacks';
import { InventoryInterface } from 'interfaces/inventory';
import { MenusInterface } from 'interfaces/menus';
import { OrdersInterface } from 'interfaces/orders';
import { PromotionsInterface } from 'interfaces/promotions';
import { ReservationsInterface } from 'interfaces/reservations';
import { StaffInterface } from 'interfaces/staff';

export interface RestaurantsInterface {
  id?: string;
  owner_id?: string;
  name: string;
  location: string;
  contact_information: string;
  operating_hours: string;
  feedbacks?: FeedbacksInterface[];
  inventory?: InventoryInterface[];
  menus?: MenusInterface[];
  orders?: OrdersInterface[];
  promotions?: PromotionsInterface[];
  reservations?: ReservationsInterface[];
  staff?: StaffInterface[];
}
