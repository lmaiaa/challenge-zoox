import {
  IsAlpha,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export default class StateUpdateDto {
  constructor(stateRegister: { name?: string; initials?: string }) {
    if (stateRegister.name) {
      this.name = stateRegister.name;
    }
    if (stateRegister.initials) {
      this.initials = stateRegister.initials;
    }
  }

  @IsOptional()
  @IsNotEmpty({ message: 'Name is required.' })
  @MaxLength(30, {
    message: 'Name must be shorter than or equal to $constraint1 characters',
  })
  @IsString()
  public readonly name?: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Initials is required.' })
  @Length(2, 2, { message: 'The initials must be exactly 2 characters  ' })
  @IsString()
  @IsAlpha()
  public readonly initials?: string;
}
