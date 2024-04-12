import { IsEnum, IsString } from 'class-validator';

import { AnimalType } from '../enums';

export class UpdateAnimalDTO {
  @IsEnum(AnimalType)
  animalType: AnimalType;

  @IsString()
  name: string;

  @IsString()
  surname: string;
}
