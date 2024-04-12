import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { CreateAnimalDTO, GetAnimalDTO, UpdateAnimalDTO } from './dtos';
import { NetworkingService } from '@example/core/networking';
import { AnimalRTO } from './rtos';
import { DogRTO } from '@example/dog';
import { CatRTO } from '@example/cat';

@Controller()
export class AnimalsController {
  constructor(private readonly networking: NetworkingService) {}

  @Get('/users')
  getUsers(){
      return 'the users';
  }

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

  @Put('/animal/:id')
  async updateAnimal(
    @Param('id') id: string,
    @Body() body: UpdateAnimalDTO,
  ): Promise<AnimalRTO> {
    const pattern = `${body.animalType}.updateOne`;
    const response = await this.networking.send<DogRTO | CatRTO>(pattern, {
      id: id,
      name: body.name,
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

  @Post('/animal')
  async create2Animal(@Body() body: CreateAnimalDTO): Promise<AnimalRTO> {
    const pattern = `${body.animalType}.createOne`;
    const response = await this.networking.send<DogRTO | CatRTO>(pattern, {
      name: body.name,
    });

    return AnimalRTO.fromAnimalRTO(response);
  }

  @Post('/animal')
  async create3Animal(@Body() body: CreateAnimalDTO): Promise<AnimalRTO> {
    const pattern = `${body.animalType}.createOne`;
    const response = await this.networking.send<DogRTO | CatRTO>(pattern, {
      name: body.name,
    });

    return AnimalRTO.fromAnimalRTO(response);
  }

  @Post('/animal')
  async create4Animal(@Body() body: CreateAnimalDTO): Promise<AnimalRTO> {
    const pattern = `${body.animalType}.createOne`;
    const response = await this.networking.send<DogRTO | CatRTO>(pattern, {
      name: body.name,
    });

    return AnimalRTO.fromAnimalRTO(response);
  }

  @Post('/animal')
  async create5Animal(@Body() body: CreateAnimalDTO): Promise<AnimalRTO> {
    const pattern = `${body.animalType}.createOne`;
    const response = await this.networking.send<DogRTO | CatRTO>(pattern, {
      name: body.name,
    });

    return AnimalRTO.fromAnimalRTO(response);
  }

  @Post('/animal')
  async create6Animal(@Body() body: CreateAnimalDTO): Promise<AnimalRTO> {
    const pattern = `${body.animalType}.createOne`;
    const response = await this.networking.send<DogRTO | CatRTO>(pattern, {
      name: body.name,
    });

    return AnimalRTO.fromAnimalRTO(response);
  }

  @Post('/animal')
  async create7Animal(@Body() body: CreateAnimalDTO): Promise<AnimalRTO> {
    const pattern = `${body.animalType}.createOne`;
    const response = await this.networking.send<DogRTO | CatRTO>(pattern, {
      name: body.name,
    });

    return AnimalRTO.fromAnimalRTO(response);
  }

  @Post('/animal')
  async create8Animal(@Body() body: CreateAnimalDTO): Promise<AnimalRTO> {
    const pattern = `${body.animalType}.createOne`;
    const response = await this.networking.send<DogRTO | CatRTO>(pattern, {
      name: body.name,
    });

    return AnimalRTO.fromAnimalRTO(response);
  }
}
