import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response } from 'express';
import CreateWilderModel from '../validators/CreateWilder';
import InputError from '../validators/InputError';
import WilderModel from '../models/Wilder';

export default {
  create: async (req: Request, res: Response): Promise<void> => {
    const inputWilder = plainToClass(CreateWilderModel, req.body);
    const errors = await validate(inputWilder);
    if (errors.length > 0) {
      throw new InputError(errors);
    }

    await WilderModel.init();
    const wilder = new WilderModel(inputWilder);
    const result = await wilder.save();

    res.json({ success: true, result });
  },

  findById: async (req: Request, res: Response): Promise<void> => {
    const result = await WilderModel.findById(req.params.id);
    res.json({ success: true, result });
  },

  findAll: async (req: Request, res: Response): Promise<void> => {
    const result = await WilderModel.find();
    res.json({ success: true, result });
  },

  update: async (req: Request, res: Response): Promise<void> => {
    const result = await WilderModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.json({ success: true, result });
  },

  delete: async (req: Request, res: Response): Promise<void> => {
    const result = await WilderModel.findByIdAndRemove(req.params.id);
    res.json({ success: true, result });
  },
};
