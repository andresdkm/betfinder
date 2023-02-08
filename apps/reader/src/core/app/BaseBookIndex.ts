import { BookModel } from '../../../../common/models/book.model';
import { LeagueModel } from '../../../../common/models/league.model';
import { ApiService } from '../../../../common/services/api.service';
import { Inject, Logger } from '@nestjs/common';
import { BdService } from '../../../bd/bd.service';

export abstract class BaseBookIndex {

  configuration: BookModel;
  protected apiService: ApiService;
  protected logger: Logger;
  protected bdService: BdService;
  protected name: string;
  protected leagues: LeagueModel[];

  protected constructor(name: string, bdService: BdService, apiService: ApiService, logger: Logger) {
    this.name = name;
    this.apiService = apiService;
    this.logger = logger;
    this.bdService = bdService;
  }

  async abstract indexLeagues() ;

  async loadConfiguration() {
    this.configuration = await this.apiService.getBook(this.name);
    if (this.configuration.hide) {
      await this.apiService.hideIp(this.configuration.api_url);
    }
    const ip = await this.apiService.getIp();
    this.logger.debug(ip, 'The hero using the next ip ');
  }

  protected async abstract getLeague(league: LeagueModel) ;

  async indexEvents() {
    this.leagues = await this.apiService.getLeague(this.configuration._id);
    for (const league of this.leagues) {
      await this.getLeague(league);
    }
  }
}
