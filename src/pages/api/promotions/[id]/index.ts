import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { promotionsValidationSchema } from 'validationSchema/promotions';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getPromotionsById();
    case 'PUT':
      return updatePromotionsById();
    case 'DELETE':
      return deletePromotionsById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getPromotionsById() {
    const data = await prisma.promotions.findFirst({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }

  async function updatePromotionsById() {
    await promotionsValidationSchema.validate(req.body);
    const data = await prisma.promotions.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });
    return res.status(200).json(data);
  }
  async function deletePromotionsById() {
    const data = await prisma.promotions.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
