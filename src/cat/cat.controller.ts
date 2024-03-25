import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CatService } from './cat.service';
import { CatRTO } from './rtos';
import { CreateOneCatDTO, GetOneCatDTO } from './dtos';

@Controller()
export class CatController {
  constructor(private readonly catService: CatService) {}

  @MessagePattern('cat.getOne')
  async getDog(@Payload() data: GetOneCatDTO): Promise<CatRTO> {
    const dog = await this.catService.getOne(data.id);

    return CatRTO.fromEntity(dog);
  }

  @MessagePattern('cat.createOne')
  async createDog(@Payload() data: CreateOneCatDTO): Promise<CatRTO> {
    const createdDog = await this.catService.addOne(data);

    return CatRTO.fromEntity(createdDog);
  }
}
