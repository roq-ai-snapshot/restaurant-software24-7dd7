import * as yup from 'yup';

export const feedbacksValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  comment: yup.string(),
  created_at: yup.date().required(),
  customer_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
});
