import { IsMongoId, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ICity } from 'types';

export default class CityRegisterDto implements ICity {
  constructor(stateRegister: ICity) {
    this.name = stateRegister.name;
    this._stateId = stateRegister._stateId;
  }
  @IsNotEmpty({ message: 'Name is required.' })
  @MaxLength(30, {
    message: 'Name must be shorter than or equal to $constraint1 characters',
  })
  @IsString()
  public readonly name: string;

  @IsNotEmpty({ message: 'State ID is required.' })
  @IsString()
  @IsMongoId()
  public readonly _stateId: string;
}
