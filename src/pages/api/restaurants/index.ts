import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { restaurantsValidationSchema } from 'validationSchema/restaurants';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getRestaurants();
    case 'POST':
      return createRestaurants();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getRestaurants() {
    const data = await prisma.restaurants.findMany({});
    return res.status(200).json(data);
  }

  async function createRestaurants() {
    await restaurantsValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.feedbacks?.length > 0) {
      const create_feedbacks = body.feedbacks;
      body.feedbacks = {
        create: create_feedbacks,
      };
    } else {
      delete body.feedbacks;
    }
    if (body?.inventory?.length > 0) {
      const create_inventory = body.inventory;
      body.inventory = {
        create: create_inventory,
      };
    } else {
      delete body.inventory;
    }
    if (body?.menus?.length > 0) {
      const create_menus = body.menus;
      body.menus = {
        create: create_menus,
      };
    } else {
      delete body.menus;
    }
    if (body?.orders?.length > 0) {
      const create_orders = body.orders;
      body.orders = {
        create: create_orders,
      };
    } else {
      delete body.orders;
    }
    if (body?.promotions?.length > 0) {
      const create_promotions = body.promotions;
      body.promotions = {
        create: create_promotions,
      };
    } else {
      delete body.promotions;
    }
    if (body?.reservations?.length > 0) {
      const create_reservations = body.reservations;
      body.reservations = {
        create: create_reservations,
      };
    } else {
      delete body.reservations;
    }
    if (body?.staff?.length > 0) {
      const create_staff = body.staff;
      body.staff = {
        create: create_staff,
      };
    } else {
      delete body.staff;
    }
    const data = await prisma.restaurants.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
