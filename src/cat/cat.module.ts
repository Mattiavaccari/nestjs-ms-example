import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entities';
import { CatService } from './cat.service';
import { NetworkingModule } from '@example/core/networking';

@Module({
  imports: [TypeOrmModule.forFeature([Cat]), NetworkingModule],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
