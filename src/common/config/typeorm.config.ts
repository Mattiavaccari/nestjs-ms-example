import { registerAs } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { CONFIG_TOKEN } from './constants';
import { type RegisteredConfig } from './types';

export const TypeOrmConfig: RegisteredConfig<TypeOrmModuleOptions> = registerAs(
  CONFIG_TOKEN.TYPEORM,
  () => ({
    type: 'postgres',
    host: process.env.TYPEORM_POSTGRES_HOST ?? 'localhost',
    port: Number.parseInt(process.env.TYPEORM_POSTGRES_PORT ?? '5432', 10),
    username: process.env.TYPEORM_POSTGRES_USER,
    password: process.env.TYPEORM_POSTGRES_PASSWORD,
    database: process.env.TYPEORM_POSTGRES_DB,
    // Disabling rule since NestJS still lacks ESM support
    // eslint-disable-next-line unicorn/prefer-module
    entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
);
