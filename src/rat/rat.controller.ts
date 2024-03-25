import { CatRTO } from '@example/cat';
import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Transport } from '@nestjs/microservices';

@Controller()
export class RatController {
  private readonly logger = new Logger(RatController.name);

  @EventPattern('cat.created', Transport.REDIS)
  async handleCatCreated(cat: CatRTO) {
    this.logger.log(
      `Cat named "${cat.name}" entered the arena. Rats are running away!`,
    );
  }
}
