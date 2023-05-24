import * as yup from 'yup';
import { feedbacksValidationSchema } from 'validationSchema/feedbacks';
import { ordersValidationSchema } from 'validationSchema/orders';
import { reservationsValidationSchema } from 'validationSchema/reservations';
import { restaurantsValidationSchema } from 'validationSchema/restaurants';
import { staffValidationSchema } from 'validationSchema/staff';

export const usersValidationSchema = yup.object().shape({
  role: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  feedbacks: yup.array().of(feedbacksValidationSchema),
  orders_orders_customer_idTousers: yup.array().of(ordersValidationSchema),
  orders_orders_waiter_idTousers: yup.array().of(ordersValidationSchema),
  reservations_reservations_customer_idTousers: yup.array().of(reservationsValidationSchema),
  reservations_reservations_waiter_idTousers: yup.array().of(reservationsValidationSchema),
  restaurants: yup.array().of(restaurantsValidationSchema),
  staff: yup.array().of(staffValidationSchema),
});
