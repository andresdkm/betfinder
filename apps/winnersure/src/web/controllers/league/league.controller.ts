import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { LeagueRepository } from '../../../../../common/repositories/league.repository';
import { TokenGuard } from '../../guards/token.guard';

@Controller('/books/:bookId/leagues')
@UseGuards(TokenGuard)
export class LeagueController {
  constructor(private leagueRepository: LeagueRepository) {
  }

  @Get()
  async getByName(@Param() params) {
    const leagues = await this.leagueRepository.find({
      bookmarker_id: params.bookId,
    });
    return leagues;
  }
}
