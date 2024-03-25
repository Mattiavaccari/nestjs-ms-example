import { Module } from '@nestjs/common';

import { GatewayModule } from './gateway';
import { DogModule } from './dog';
import { CatModule } from './cat';
import { InfrastructureModule } from './core/infrastructure';

@Module({
  imports: [InfrastructureModule, GatewayModule, DogModule, CatModule],
})
export class AppModule {}
