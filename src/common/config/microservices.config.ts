import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constants';
import { type RegisteredConfig } from './types';
import { RedisOptions, TcpOptions, Transport } from '@nestjs/microservices';

type MicroservicesOptions = {
  tcp: TcpOptions;
  redis: RedisOptions;
};

export const MicroservicesConfig: RegisteredConfig<MicroservicesOptions> =
  registerAs(CONFIG_TOKEN.MICROSERVICES, () => ({
    tcp: {
      transport: Transport.TCP,
      options: {
        port: Number.parseInt(process.env.MICROSERVICES_TCP_PORT ?? '3001', 10),
      },
    },
    redis: {
      transport: Transport.REDIS,
      options: {
        host: process.env.MICROSERVICES_REDIS_HOST ?? 'localhost',
      },
    },
  }));
