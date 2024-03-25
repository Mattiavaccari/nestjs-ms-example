import { TRANSPORT_PROXY } from '@example/common/constants';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class NetworkingService {
  constructor(
    @Inject(TRANSPORT_PROXY.TCP) private tcp: ClientProxy,
    @Inject(TRANSPORT_PROXY.REDIS) private redis: ClientProxy,
  ) {}

  async send<T>(pattern: string, data: any): Promise<T> {
    return lastValueFrom(this.tcp.send<T>(pattern, data));
  }

  async emit(eventName: string, data: any): Promise<void> {
    this.redis.emit(eventName, data);
  }
}
