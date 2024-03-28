import { Controller, Logger } from '@nestjs/common';
import {
  EventPattern,
  MessagePattern,
  Payload,
  Transport,
} from '@nestjs/microservices';
import { CreateOneDogDTO, GetOneDogDTO, UpdateDogDTO } from './dtos';
import { DogService } from './dog.service';
import { DogRTO } from './rtos';
import { CatRTO } from '@example/cat';

@Controller()
export class DogController {
  private readonly logger = new Logger(DogController.name);

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

  @MessagePattern('dog.updateOne')
  async updateDog(@Payload() data: UpdateDogDTO): Promise<DogRTO> {
    const dog = await this.dogService.getOne(data.id);
    if (dog) {
      dog.name = data.name; // Change the name of the dog
      const updatedDog = await this.dogService.updateOne(data, data.id); // Pass both data and data.id as arguments
      return DogRTO.fromEntity(updatedDog);
    }
    return new DogRTO({}); // Return an instance of DogRTO when dog is null
  }

  @EventPattern('cat.created', Transport.REDIS)
  async handleCatCreated(cat: CatRTO) {
    this.logger.log(
      `Cat named "${cat.name}" entered the arena. Dogs are barking!`,
    );
  }
}
