import { IsEnum } from 'class-validator';

import { AnimalType } from '../enums';

export class GetAnimalDTO {
  @IsEnum(AnimalType)
  animalType: AnimalType;
}
