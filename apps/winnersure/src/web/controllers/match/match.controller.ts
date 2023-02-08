import { Controller, Get, Logger, LoggerService, Param, UseGuards } from '@nestjs/common';
import { LeagueRepository } from '../../../../../common/repositories/league.repository';
import { MatchRepository } from '../../../../../common/repositories/match.repository';
import { MatchModel } from '../../../../../common/models/match.model';
import { MatchInterface } from '../../../../../common/interfaces/match.interface';
import { TokenGuard } from '../../guards/token.guard';

@Controller('matches')
@UseGuards(TokenGuard)
export class MatchController {

  constructor(private matchRepository: MatchRepository,
              private readonly logger: Logger) {
  }

  @Get()
  async getMatches() {
    const matches = await this.matchRepository.getByIndexed();
    await this.updates(matches);
    return matches;
  }

  @Get(':id')
  async findById(@Param() params) {
    const match = await this.matchRepository.findById(params.id);
    return match;
  }

  async updates(matches: MatchInterface[]) {
    for (const match of matches) {
      match.updated_at = new Date();
      await this.matchRepository.save(match);
    }
  }
}
