import * as yup from 'yup';

export const promotionsValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  restaurant_id: yup.string().nullable(),
});
