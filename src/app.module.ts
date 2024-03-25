import { Module } from '@nestjs/common';

import { GatewayModule } from './gateway';
import { DogModule } from './dog';
import { CatModule } from './cat';
import { InfrastructureModule } from './core/infrastructure';
import { RatModule } from './rat';

@Module({
  imports: [
    InfrastructureModule,
    GatewayModule,
    DogModule,
    CatModule,
    RatModule,
  ],
})
export class AppModule {}
