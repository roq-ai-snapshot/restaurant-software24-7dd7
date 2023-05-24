export interface ReservationsInterface {
  id?: string;
  customer_id?: string;
  restaurant_id?: string;
  waiter_id?: string;
  table_number: number;
  reservation_date: Date;
  reservation_time: string;
  status: string;
}
