import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { errorHandler } from './error-handler';

export { apiHandler };

interface ApiHandler {
  [key: string]: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
}

function apiHandler(handler: ApiHandler): NextApiHandler {
  return async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const method = req?.method?.toLowerCase();

    if (!handler[method!]) {
      res
        .status(405)
        .json({
          error: {
            message: `Method ${req.method} Not Allowed`,
          },
          status: 'failed',
        });
      return;
    }

    try {
      await handler[method!](req, res);
    } catch (err) {
      errorHandler(err, res);
    }
  };
}
