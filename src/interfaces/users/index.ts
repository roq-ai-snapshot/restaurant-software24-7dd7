import { FeedbacksInterface } from 'interfaces/feedbacks';
import { OrdersInterface } from 'interfaces/orders';
import { ReservationsInterface } from 'interfaces/reservations';
import { RestaurantsInterface } from 'interfaces/restaurants';
import { StaffInterface } from 'interfaces/staff';

export interface UsersInterface {
  id?: string;
  role: string;
  name: string;
  email: string;
  password: string;
  feedbacks?: FeedbacksInterface[];
  orders_orders_customer_idTousers?: OrdersInterface[];
  orders_orders_waiter_idTousers?: OrdersInterface[];
  reservations_reservations_customer_idTousers?: ReservationsInterface[];
  reservations_reservations_waiter_idTousers?: ReservationsInterface[];
  restaurants?: RestaurantsInterface[];
  staff?: StaffInterface[];
}
