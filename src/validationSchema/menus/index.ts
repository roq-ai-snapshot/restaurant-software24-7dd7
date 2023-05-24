import * as yup from 'yup';
import { dishesValidationSchema } from 'validationSchema/dishes';

export const menusValidationSchema = yup.object().shape({
  name: yup.string().required(),
  restaurant_id: yup.string().nullable(),
  dishes: yup.array().of(dishesValidationSchema),
});
