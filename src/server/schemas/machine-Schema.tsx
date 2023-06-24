
import { Machine } from '@/utils/protocols';
import Joi from 'joi';

export const MachineSchema = Joi.object<Machine>({
  id: Joi.number().required(),
  name: Joi.string().required(),
});