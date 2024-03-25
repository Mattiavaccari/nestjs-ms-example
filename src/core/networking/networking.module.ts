import { TRANSPORT_PROXY } from '@example/common/constants';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  ClientsModule,
  RedisOptions,
  TcpClientOptions,
} from '@nestjs/microservices';
import { NetworkingService } from './networking.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: TRANSPORT_PROXY.TCP,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) =>
          configService.get('microservices.tcp') as TcpClientOptions,
      },
      {
        name: TRANSPORT_PROXY.REDIS,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) =>
          configService.get('microservices.redis') as RedisOptions,
      },
    ]),
  ],
  providers: [NetworkingService],
  exports: [NetworkingService],
})
export class NetworkingModule {}
