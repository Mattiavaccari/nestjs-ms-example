import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dog } from './entities';
import { CreateOneDogDTO } from './dtos';

@Injectable()
export class DogService {
  constructor(@InjectRepository(Dog) private dogRepository: Repository<Dog>) {}

  async addOne(data: CreateOneDogDTO): Promise<Dog> {
    const dog = this.dogRepository.create(data);

    return this.dogRepository.save(dog);
  }

  async getOne(id: number): Promise<Dog | null> {
    return this.dogRepository.findOneBy({ id });
  }
}
