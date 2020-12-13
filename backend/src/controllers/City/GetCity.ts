import { Repository } from '@/utils/repositories/crud.repository';
import { City } from '@/model';
import { Request, Response } from 'express';
import NameValidate from '../dtos/name.dto';
import IdValidate from '../dtos/id.dto';
const { validate } = require('class-validator');

export default async (req: Request, res: Response) => {
  if (req.params.idState) {
    const keyQuery = Object.keys(req.query);
    const stateId = req.params.idState;
    const idDto = new IdValidate(stateId);
    const errorId = await validate(idDto);
    if (errorId.length) {
      res.status(500).send(errorId);
    } else {
      if (keyQuery.length && keyQuery.filter(key => key === 'name').length) {
        const name = String(req.query.name);
        const nameDto = new NameValidate(name);
        const errors = await validate(nameDto);
        if (errors.length) {
          res.status(500).send(errors);
        } else {
          const CityCrud = new Repository(City);
          const response = await CityCrud.find({
            $and: [
              { _stateId: stateId },
              { name: { $regex: name, $options: 'i' } },
            ],
          });
          res.send(response);
        }
      } else if (!keyQuery.length) {
        const CityCrud = new Repository(City);
        const response = await CityCrud.find({ _stateId: stateId });
        res.send(response);
      } else {
        res.status(500).send('invalid search, search by state name');
      }
    }
  } else {
    const keyQuery = Object.keys(req.query);
    if (keyQuery.length && keyQuery.filter(key => key === 'name').length) {
      const name = String(req.query.name);
      const nameDto = new NameValidate(name);
      const errors = await validate(nameDto);
      if (errors.length) {
        res.status(500).send(errors);
      } else {
        const CityCrud = new Repository(City);
        const response = await CityCrud.find({
          name: { $regex: name, $options: 'i' },
        });
        res.send(response);
      }
    } else if (!keyQuery.length) {
      const CityCrud = new Repository(City);
      const response = await CityCrud.findAll();
      res.send(response);
    } else {
      res.status(500).send('invalid search, search by state name');
    }
  }
};
