import mongoose from 'mongoose';

const { Schema } = mongoose;

export const citySchema = new Schema(
  {
    name: { type: String, trim: true, lowercase: true },
    _stateId: { type: 'ObjectId', ref: 'state' },
  },
  { timestamps: true, autoCreate: true },
);
