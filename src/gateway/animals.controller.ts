import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { CreateAnimalDTO, GetAnimalDTO } from './dtos';
import { NetworkingService } from '@example/core/networking';
import { AnimalRTO } from './rtos';
import { DogRTO } from '@example/dog';
import { CatRTO } from '@example/cat';

@Controller()
export class AnimalsController {
  constructor(private readonly networking: NetworkingService) {}

  @Get('/animal/:id')
  async getAnimal(
    @Param('id') id: string,
    @Query() query: GetAnimalDTO,
  ): Promise<AnimalRTO> {
    const pattern = `${query.animalType}.getOne`;
    const response = await this.networking.send<DogRTO | CatRTO>(pattern, {
      id: id,
    });

    return AnimalRTO.fromAnimalRTO(response);
  }

  @Post('/animal')
  async createAnimal(@Body() body: CreateAnimalDTO): Promise<AnimalRTO> {
    const pattern = `${body.animalType}.createOne`;
    const response = await this.networking.send<DogRTO | CatRTO>(pattern, {
      name: body.name,
    });

    return AnimalRTO.fromAnimalRTO(response);
  }
}
