import { Repository } from '@/utils/repositories/crud.repository';
import { State } from '@/model';
import { Request, Response } from 'express';
import StateUpdateValidate from '../dtos/state-update.dto';
import IdValidate from '../dtos/id.dto';
const { validate } = require('class-validator');
const StateCrud = new Repository(State);

export default async (req: Request, res: Response) => {
  const _id = String(req.params.id);
  const updates = req.body;
  if (Object.keys(updates).length) {
    const IdDto = new IdValidate(_id);
    const StateDto = new StateUpdateValidate(updates);
    const errors = await validate(StateDto, IdDto);
    if (errors.length) {
      res.status(500).send(errors);
    } else {
      const response = await StateCrud.updateById(_id, updates);
      res.send(response);
    }
  } else {
    res.status(500).send('The body cannot be empty');
  }
};
