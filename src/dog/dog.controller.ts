import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateOneDogDTO, GetOneDogDTO } from './dtos';
import { DogService } from './dog.service';
import { DogRTO } from './rtos';

@Controller()
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @MessagePattern('dog.getOne')
  async getDog(@Payload() data: GetOneDogDTO): Promise<DogRTO> {
    const dog = await this.dogService.getOne(data.id);

    return DogRTO.fromEntity(dog);
  }

  @MessagePattern('dog.createOne')
  async createDog(@Payload() data: CreateOneDogDTO): Promise<DogRTO> {
    const createdDog = await this.dogService.addOne(data);

    return DogRTO.fromEntity(createdDog);
  }
}
