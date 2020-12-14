import { Repository } from '@/utils/repositories/crud.repository';
import { City, State } from '@/model';
import { Request, Response } from 'express';
import IdValidate from '../dtos/id.dto';
import { validate } from 'class-validator';
//import mongoose from 'mongoose';

const StateCrud = new Repository(State);
const CityCrud = new Repository(City);

export default async (req: Request, res: Response) => {
  if (req.params.id) {
    const _id = String(req.params.id);
    // const objectID = mongoose.Types.ObjectId(_id);

    const IdDto = new IdValidate(_id);
    const errors = await validate(IdDto);
    if (errors.length) {
      res.status(500).send(errors);
    } else {
      const response = await StateCrud.deleteById(_id);
      if (response) {
        const cities = await CityCrud.find({ _stateId: response._id });
        if (cities.length) {
          for await (const city of cities) {
            await CityCrud.deleteById(String(city._id));
          }
        }
      }
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
