import { Repository } from '@/utils/repositories/crud.repository';
import { City } from '@/model';
import { Request, Response } from 'express';
import IdValidate from '../dtos/id.dto';
import { validate } from 'class-validator';
//import mongoose from 'mongoose';

export default async (req: Request, res: Response) => {
  if (req.params.id) {
    const _id = String(req.params.id);

    const IdDto = new IdValidate(_id);
    const errors = await validate(IdDto);
    if (errors.length) {
      res.status(500).send(errors);
    } else {
      const CityCrud = new Repository(City);
      const response = await CityCrud.deleteById(_id);
      res.send(response);
    }
  } else {
    res
      .status(500)
      .send(
        'It is necessary to pass the city id by parameter to perform action',
      );
  }
};
