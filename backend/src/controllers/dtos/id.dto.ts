import { IsMongoId, IsNotEmpty, MaxLength } from 'class-validator';
//import { Types } from 'mongoose';

export default class nameDto {
  constructor(_id: string) {
    this.id = _id;
  }
  @IsNotEmpty({ message: 'ID is required.' })
  @MaxLength(30, {
    message: 'ID must be shorter than or equal to $constraint1 characters',
  })
  @IsMongoId()
  public readonly id: string;
}
