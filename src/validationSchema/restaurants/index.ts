import * as yup from 'yup';
import { feedbacksValidationSchema } from 'validationSchema/feedbacks';
import { inventoryValidationSchema } from 'validationSchema/inventories';
import { menusValidationSchema } from 'validationSchema/menus';
import { ordersValidationSchema } from 'validationSchema/orders';
import { promotionsValidationSchema } from 'validationSchema/promotions';
import { reservationsValidationSchema } from 'validationSchema/reservations';
import { staffValidationSchema } from 'validationSchema/staff';

export const restaurantsValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  contact_information: yup.string().required(),
  operating_hours: yup.string().required(),
  owner_id: yup.string().nullable(),
  feedbacks: yup.array().of(feedbacksValidationSchema),
  inventory: yup.array().of(inventoryValidationSchema),
  menus: yup.array().of(menusValidationSchema),
  orders: yup.array().of(ordersValidationSchema),
  promotions: yup.array().of(promotionsValidationSchema),
  reservations: yup.array().of(reservationsValidationSchema),
  staff: yup.array().of(staffValidationSchema),
});
