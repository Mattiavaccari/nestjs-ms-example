import { RTO } from '@example/common/rtos';
import { Dog } from '../entities';

export class DogRTO extends RTO {
  id: number;
  name: string;
  breed: string;

  static fromEntity(entity: Dog | null): DogRTO {
    if (!entity) {
      return new this({});
    }

    return new this({
      id: entity.id,
      name: entity.name,
      breed: entity.breed,
    });
  }
}
