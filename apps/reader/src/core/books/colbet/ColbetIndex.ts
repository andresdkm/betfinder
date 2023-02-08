import { BdService } from '../../../../bd/bd.service';
import { ApiService } from '../../../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import { BaseBookIndex } from '../../app/BaseBookIndex';
import Constants from '../../app/Constants';
import { LeagueModel } from '../../../../../common/models/league.model';
import { EventModel } from '../../../../../common/models/event.model';
import 'moment-timezone';
import * as moment from 'moment';

export class ColbetIndex extends BaseBookIndex {

  constructor(bdService: BdService, apiService: ApiService, logger: Logger) {
    super(Constants.COLBET_ID, bdService, apiService, logger);
    this.bdService = bdService;
    this.apiService.setHeaders({
      'Origin': 'https://www.colbet.co',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      'Referer': 'https://www.colbet.co/frame.jsp?openpage=sport',
      'sessionId': null,
      'siteId': 2,
      'timezone': 300,
      'lang': 'en',
    });
  }

  protected async getLeague(league: LeagueModel) {
    const url = this.configuration.api_url + 'prematch/tournament';
    let category: ColbetModel.CategoryRoot;
    const res = await this.apiService.post(url, {
      interval: 0,
      tournamentId: league.provider_id,
    });
    const root = res.data as ColbetModel.CategoryRoot[];
    if (root.length > 0) {
      category = root[0];
    }
    if (category && category.categories.length > 0) {
      for (const tournament of category.categories[0].tournaments) {
        for (const event of tournament.events) {
          const newEvent: EventModel = {
            away: event.awayName,
            away_en: event.awayName,
            bookmarker_id: this.configuration._id,
            home: event.homeName,
            home_en: event.homeName,
            league: event.tournamentName,
            name: event.homeName + ' - ' + event.awayName,
            name_en: event.homeName + ' - ' + event.awayName,
            provider_country: event.categoryName,
            provider_id: event.id.toString(),
            sport_id: league.sport_id,
            start_at: moment(event.eventDate).tz('America/Bogota').toDate(),
          };
          await this.bdService.saveEvent(newEvent);
        }
      }
    }
  }

  async indexLeagues(): Promise<any> {
    const url = this.configuration.api_url + 'prematch/menu';
    let root: ColbetModel.CategoryRoot[] = [];
    const res = await this.apiService.post(url, {
      interval: 0,
    });
    root = res.data as ColbetModel.CategoryRoot[];
    const sports = {
      1: Constants.SOCCER_ID,
      23: Constants.BASKETBALL,
      2: Constants.TENNIS_ID,
    };
    for (const item of root) {
      if (sports[item.id]) {
        for (const category of item.categories) {
          for (const tournament of category.tournaments) {
            const league: LeagueModel = {
              bookmarker_id: this.configuration._id,
              configurations: undefined,
              provider_country: category.name,
              provider_id: tournament.id.toString(),
              provider_name: tournament.name,
              sport_id: sports[item.id],
            };
            await this.bdService.saveLeague(league);
          }

        }
      }
    }
  }
}
