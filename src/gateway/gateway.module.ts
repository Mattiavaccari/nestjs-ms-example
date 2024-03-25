import { Module } from '@nestjs/common';

import { AnimalsController } from './animals.controller';
import { NetworkingModule } from '@example/core/networking';

@Module({
  imports: [NetworkingModule],
  controllers: [AnimalsController],
})
export class GatewayModule {}
