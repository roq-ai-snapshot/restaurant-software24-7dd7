import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { feedbacksValidationSchema } from 'validationSchema/feedbacks';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getFeedbacksById();
    case 'PUT':
      return updateFeedbacksById();
    case 'DELETE':
      return deleteFeedbacksById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getFeedbacksById() {
    const data = await prisma.feedbacks.findFirst({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }

  async function updateFeedbacksById() {
    await feedbacksValidationSchema.validate(req.body);
    const data = await prisma.feedbacks.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });
    return res.status(200).json(data);
  }
  async function deleteFeedbacksById() {
    const data = await prisma.feedbacks.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
