import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { inventoryValidationSchema } from 'validationSchema/inventories';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getInventories();
    case 'POST':
      return createInventory();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getInventories() {
    const data = await prisma.inventory.findMany({});
    return res.status(200).json(data);
  }

  async function createInventory() {
    await inventoryValidationSchema.validate(req.body);
    const body = { ...req.body };

    const data = await prisma.inventory.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
