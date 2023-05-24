import * as yup from 'yup';

export const reservationsValidationSchema = yup.object().shape({
  table_number: yup.number().integer().required(),
  reservation_date: yup.date().required(),
  reservation_time: yup.string().required(),
  status: yup.string().required(),
  customer_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
  waiter_id: yup.string().nullable(),
});
