import { RTO } from '@example/common/rtos';
import { Cat } from '../entities';

export class CatRTO extends RTO {
  id: number;
  name: string;
  breed: string;

  static fromEntity(entity: Cat | null): CatRTO {
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
