import { Test, TestingModule } from '@nestjs/testing';
import { EventGateway } from './event-gateway';

describe('EventGateway', () => {
  let provider: EventGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventGateway],
    }).compile();

    provider = module.get<EventGateway>(EventGateway);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
