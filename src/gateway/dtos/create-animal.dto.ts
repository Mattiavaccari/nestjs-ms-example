import { IsEnum, IsString } from 'class-validator';

import { AnimalType } from '../enums';

export class CreateAnimalDTO {
  @IsEnum(AnimalType)
  animalType: AnimalType;

  @IsString()
  name: string;
}
