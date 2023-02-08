import { Controller, Get, Query } from '@nestjs/common';
import { BetRepository } from '../../../../../common/repositories/bet.repository';

@Controller('bets')
export class BetController {

  constructor(private betRepository: BetRepository) {

  }

  @Get()
  async me(@Query('token') token) {
   return await this.betRepository.getBets();
  }
}
