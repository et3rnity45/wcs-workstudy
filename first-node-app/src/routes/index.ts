import { Router, Request, Response } from 'express';
import wilderRoutes from './wilder';

const router = Router();

router.use('/api/wilders', wilderRoutes);

router.use((req: Request, res: Response) => {
  res.status(404);
  res.send({ success: false, message: 'Wrong adress' });
});

export default router;
