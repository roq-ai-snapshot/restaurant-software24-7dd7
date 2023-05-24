import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { dishesValidationSchema } from 'validationSchema/dishes';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getDishes();
    case 'POST':
      return createDishes();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getDishes() {
    const data = await prisma.dishes.findMany({});
    return res.status(200).json(data);
  }

  async function createDishes() {
    await dishesValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.order_items?.length > 0) {
      const create_order_items = body.order_items;
      body.order_items = {
        create: create_order_items,
      };
    } else {
      delete body.order_items;
    }
    const data = await prisma.dishes.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
