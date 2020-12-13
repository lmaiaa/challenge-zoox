import mongoose from 'mongoose';
import { stateSchema } from './schemas/state.schema';
import { citySchema } from './schemas/city.schema';

export const State = mongoose.model('state', stateSchema);
export const City = mongoose.model('city', citySchema);
