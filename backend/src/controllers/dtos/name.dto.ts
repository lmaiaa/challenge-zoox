import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export default class nameDto {
  constructor(name: string = '') {
    this.name = name;
  }
  @IsNotEmpty({ message: 'Name is required.' })
  @MaxLength(30, {
    message: 'Name must be shorter than or equal to $constraint1 characters',
  })
  @IsString()
  public readonly name: string;
}
