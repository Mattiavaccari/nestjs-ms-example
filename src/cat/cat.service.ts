import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entities';
import { CreateOneCatDTO } from './dtos';

@Injectable()
export class CatService {
  constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}

  async addOne(data: CreateOneCatDTO): Promise<Cat> {
    const cat = this.catRepository.create(data);

    return this.catRepository.save(cat);
  }

  async getOne(id: number): Promise<Cat | null> {
    return this.catRepository.findOneBy({ id });
  }
}
