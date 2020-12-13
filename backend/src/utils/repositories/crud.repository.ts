import { Model, Document } from 'mongoose';

export class Repository {
  model: Model<Document>;
  constructor(model: Model<Document>) {
    this.model = model;
  }
  create(dataDto: Document) {
    const genericalInstance = new this.model(dataDto);
    return genericalInstance.save();
  }
  // return all coins
  findAll() {
    return this.model.find().sort('name');
  }

  //find coin by the id
  find(query: Record<string, any>) {
    return this.model.find(query).sort('name');
  }

  // delete coin
  deleteById(_id: Document['_id']) {
    return this.model.findOneAndDelete(_id);
  }

  //update coin
  updateById(_id: Document['_id'], value: Record<string, string | number>) {
    return this.model.findByIdAndUpdate(_id, value);
  }
}
