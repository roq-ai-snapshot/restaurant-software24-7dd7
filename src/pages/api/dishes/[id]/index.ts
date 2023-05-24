import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { dishesValidationSchema } from 'validationSchema/dishes';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getDishesById();
    case 'PUT':
      return updateDishesById();
    case 'DELETE':
      return deleteDishesById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getDishesById() {
    const data = await prisma.dishes.findFirst({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }

  async function updateDishesById() {
    await dishesValidationSchema.validate(req.body);
    const data = await prisma.dishes.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });
    return res.status(200).json(data);
  }
  async function deleteDishesById() {
    const data = await prisma.dishes.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
