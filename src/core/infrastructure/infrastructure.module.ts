import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModuleConfig, TypeOrmConfig } from '@example/common/config';

@Module({
  imports: [
    ConfigModule.forRoot(ConfigModuleConfig),
    TypeOrmModule.forRootAsync(TypeOrmConfig.asProvider()),
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ transform: true }),
    },
  ],
})
export class InfrastructureModule {}
