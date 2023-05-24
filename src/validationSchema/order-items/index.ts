import * as yup from 'yup';

export const orderItemsValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  price: yup.number().integer().required(),
  order_id: yup.string().nullable(),
  dish_id: yup.string().nullable(),
});
