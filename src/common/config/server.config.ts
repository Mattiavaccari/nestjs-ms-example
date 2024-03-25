import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constants';
import { type RegisteredConfig } from './types';

type ServerOptions = {
  port: number;
};

export const ServerConfig: RegisteredConfig<ServerOptions> = registerAs(
  CONFIG_TOKEN.SERVER,
  () => ({
    port: Number.parseInt(process.env.SERVER_PORT ?? '3000', 10),
  }),
);
