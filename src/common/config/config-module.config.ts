import type { ConfigModuleOptions } from '@nestjs/config';
import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';

import { EnvironmentSchema } from '@example/common/schemas';

import { TypeOrmConfig } from './typeorm.config';
import { ServerConfig } from './server.config';
import { MicroservicesConfig } from './microservices.config';

export const ConfigModuleConfig: ConfigModuleOptions = {
  isGlobal: true,
  validate(config: Record<string, unknown>) {
    const validatedConfig = plainToClass(EnvironmentSchema, config, {
      enableImplicitConversion: true,
    });

    const errors = validateSync(validatedConfig, {
      skipMissingProperties: false,
    });

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }

    return validatedConfig;
  },
  load: [ServerConfig, MicroservicesConfig, TypeOrmConfig],
};
