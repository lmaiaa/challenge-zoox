import { Repository } from '@/utils/repositories/crud.repository';
import { State } from '@/model';
import { Request, Response } from 'express';
import StateRegisterValidate from '../dtos/state-register.dto';
const { validate } = require('class-validator');
const StateCrud = new Repository(State);

export default async (req: Request, res: Response) => {
  const state = req.body;

  const StateDto = new StateRegisterValidate(state);
  const errors = await validate(StateDto);
  if (errors.length) {
    res.status(500).send(errors);
  } else {
    try {
      const response = await StateCrud.create(state);
      res.send(response);
    } catch (error) {
      if (error.name === 'MongoError') {
        res
          .status(500)
          .send([{ constraints: { error: 'Existing initials ' } }]);
      } else {
        res.status(400);
      }
    }
  }
};
