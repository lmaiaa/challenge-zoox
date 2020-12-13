import {
  IsAlpha,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { IState } from 'types';

export default class StateRegisterDto implements IState {
  constructor(stateRegister: IState = { name: '', initials: '' }) {
    this.name = stateRegister.name;
    this.initials = stateRegister.initials;
  }

  @IsNotEmpty({ message: 'Name is required.' })
  @MaxLength(30, {
    message: 'Name must be shorter than or equal to $constraint1 characters',
  })
  @IsString()
  public readonly name: string;

  @IsNotEmpty({ message: 'Initials is required.' })
  @Length(2, 2, { message: 'The initials must be exactly 2 characters  ' })
  @IsString()
  @IsAlpha()
  public readonly initials: string;
}
