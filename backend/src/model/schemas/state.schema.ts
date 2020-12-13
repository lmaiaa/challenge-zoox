import mongoose from 'mongoose';

const { Schema } = mongoose;

export const stateSchema = new Schema(
  {
    name: { type: String, trim: true, lowercase: true },
    initials: { type: String, trim: true, lowercase: true, unique: true },
  },
  { timestamps: true, autoCreate: true },
);
