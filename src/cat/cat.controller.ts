import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CatService } from './cat.service';
import { CatRTO } from './rtos';
import { CreateOneCatDTO, GetOneCatDTO } from './dtos';
import { NetworkingService } from '@example/core/networking';

@Controller()
export class CatController {
  constructor(
    private readonly catService: CatService,
    private readonly networking: NetworkingService,
  ) {}

  @MessagePattern('cat.getOne')
  async getDog(@Payload() data: GetOneCatDTO): Promise<CatRTO> {
    const cat = await this.catService.getOne(data.id);

    return CatRTO.fromEntity(cat);
  }

  @MessagePattern('cat.createOne')
  async createDog(@Payload() data: CreateOneCatDTO): Promise<CatRTO> {
    const createdCat = await this.catService.addOne(data);
    this.networking.emit('cat.created', createdCat);

    return CatRTO.fromEntity(createdCat);
  }
}
