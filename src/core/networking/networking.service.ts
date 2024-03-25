import { TRANSPORT_PROXY } from '@example/common/constants';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class NetworkingService {
  constructor(@Inject(TRANSPORT_PROXY.TCP) private tcp: ClientProxy) {}

  async send<T>(pattern: string, data: any): Promise<T> {
    return lastValueFrom(this.tcp.send<T>(pattern, data));
  }
}
