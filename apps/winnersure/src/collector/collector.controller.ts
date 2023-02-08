import { Controller, Inject, LoggerService } from '@nestjs/common';
import { COLLECTOR_SERVICE } from './collector.constants';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

@Controller()
export class CollectorController {
  constructor(@Inject(COLLECTOR_SERVICE) private readonly client: ClientProxy, private readonly logger: Logger) {}
  @MessagePattern({ cmd: 'laravel*' })
  sum(data: any) {
    this.logger.debug(data);
  }
}
