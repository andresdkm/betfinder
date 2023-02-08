import { Logger, Module } from '@nestjs/common';
import { EventGateway } from './event-gateway';
import { CommonModule } from '../../../common/common.module';

@Module({
  imports: [
    CommonModule,
  ],
  providers: [
    EventGateway,
  ],
})
export class EventsModule {}
