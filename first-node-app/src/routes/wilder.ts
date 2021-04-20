import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import wilderController from '../controllers/wilders';

const router = Router();

router
  .route('/')
  .get(asyncHandler(wilderController.findAll))
  .post(asyncHandler(wilderController.create));

router
  .route('/:id')
  .get(asyncHandler(wilderController.findById))
  .put(asyncHandler(wilderController.update))
  .delete(asyncHandler(wilderController.delete));

export default router;
