import { IsNumber, IsString } from 'class-validator';
import { DogRTO } from '@example/dog';
import { CatRTO } from '@example/cat';
import { RTO } from '@example/common/rtos';

export class AnimalRTO extends RTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  static fromAnimalRTO(animal: DogRTO | CatRTO) {
    return new this({
      id: animal.id,
      name: animal.name,
    });
  }
}
