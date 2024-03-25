import { Module } from '@nestjs/common';
import { RatController } from './rat.controller';

@Module({
  controllers: [RatController],
})
export class RatModule {}
