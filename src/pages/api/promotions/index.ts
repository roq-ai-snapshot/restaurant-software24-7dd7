import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { promotionsValidationSchema } from 'validationSchema/promotions';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getPromotions();
    case 'POST':
      return createPromotions();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getPromotions() {
    const data = await prisma.promotions.findMany({});
    return res.status(200).json(data);
  }

  async function createPromotions() {
    await promotionsValidationSchema.validate(req.body);
    const body = { ...req.body };

    const data = await prisma.promotions.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
