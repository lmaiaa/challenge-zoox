import { Repository } from '@/utils/repositories/crud.repository';
import { State } from '@/model';
import { Request, Response } from 'express';
import NameValidate from '../dtos/name.dto';
const { validate } = require('class-validator');

export default async (req: Request, res: Response) => {
  const keyQuery = Object.keys(req.query);
  if (keyQuery.length && keyQuery.filter(key => key === 'name').length) {
    const name = String(req.query.name);
    const nameDto = new NameValidate(name);
    const errors = await validate(nameDto);
    if (errors.length) {
      res.status(500).send(errors);
    } else {
      const StateCrud = new Repository(State);
      const response = await StateCrud.find({
        $or: [
          { name: { $regex: name, $options: 'i' } },
          { initials: { $regex: name, $options: 'i' } },
        ],
      });
      res.send(response);
    }
  } else if (!keyQuery.length) {
    const StateCrud = new Repository(State);
    const response = await StateCrud.findAll();
    res.send(response);
  } else {
    res.status(500).send('invalid search, search by state name');
  }
};
