import { Repository } from '@/utils/repositories/crud.repository';
import { City } from '@/model';
import { Request, Response } from 'express';
import CityRegisterValidate from '../dtos/city-register.dto';
import mongoose from 'mongoose';
const { validate } = require('class-validator');

const CityCrud = new Repository(City);

export default async (req: Request, res: Response) => {
  if (req.params.idState) {
    const city = req.body;
    const stateId = req.params.idState;
    const CityDto = new CityRegisterValidate({
      ...city,
      _stateId: stateId,
    });
    const errors = await validate(CityDto);
    if (errors.length) {
      res.status(500).send(errors);
    } else {
      const response = await CityCrud.create({
        ...city,
        _stateId: mongoose.Types.ObjectId(stateId),
      });
      res.send(response);
    }
  } else {
    res
      .status(500)
      .send(
        'It is necessary to pass the state id by parameter to perform action',
      );
  }
};
