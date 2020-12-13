import { Repository } from '@/utils/repositories/crud.repository';
import { City } from '@/model';
import { Request, Response } from 'express';
import CityUpdateValidate from '../dtos/state-update.dto';
import IdValidate from '../dtos/id.dto';
const { validate } = require('class-validator');

export default async (req: Request, res: Response) => {
  const _id = String(req.params.id);
  const updates = req.body;
  if (Object.keys(updates).length) {
    const IdDto = new IdValidate(_id);
    const CityDto = new CityUpdateValidate(updates);
    const errors = await validate(CityDto, IdDto);
    if (errors.length) {
      res.status(500).send(errors);
    } else {
      const CityCrud = new Repository(City);
      const response = await CityCrud.updateById(_id, updates);
      res.send(response);
    }
  } else {
    res.status(500).send('The body cannot be empty');
  }
};
