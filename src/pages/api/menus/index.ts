import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { menusValidationSchema } from 'validationSchema/menus';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getMenus();
    case 'POST':
      return createMenus();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getMenus() {
    const data = await prisma.menus.findMany({});
    return res.status(200).json(data);
  }

  async function createMenus() {
    await menusValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.dishes?.length > 0) {
      const create_dishes = body.dishes;
      body.dishes = {
        create: create_dishes,
      };
    } else {
      delete body.dishes;
    }
    const data = await prisma.menus.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
