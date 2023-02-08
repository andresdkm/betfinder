import { BaseBookIndex } from '../../app/BaseBookIndex';
import { BdService } from '../../../../bd/bd.service';
import { ApiService } from '../../../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import Constants from '../../app/Constants';
import { LeagueModel } from '../../../../../common/models/league.model';
import { EventModel } from '../../../../../common/models/event.model';
import * as moment from 'moment';

export class MelbetIndex extends BaseBookIndex {

  constructor(bdService: BdService, apiService: ApiService, logger: Logger) {
    super(Constants.MELBET_ID, bdService, apiService, logger);
    this.bdService = bdService;
    this.apiService.setHeaders({
      'Origin': '1xbet.pe',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      'Referer': 'https://1xbet.pe/es/line/Football/',
    });
  }

  protected async getLeague(league: LeagueModel) {
    const url = this.configuration.api_url + '/GetChampZip?sport=' + league.configurations + '&champ=' + league.provider_id + '&lng=en&tf=2200000&tz=-5&country=91&virtualSports=true';
    let category: MelbetModel.RootObject2;
    const res = await this.apiService.get(url);
    category = res.data as MelbetModel.RootObject2;
    if (category) {
      for (const event of category.Value.G) {
        const newEvent: EventModel = {
          away: event.O2,
          away_en: event.O2,
          bookmarker_id: this.configuration._id,
          home: event.O1,
          home_en: event.O1,
          league: category.Value.L,
          name: event.O1 + ' - ' + event.O2,
          name_en: event.O1 + ' - ' + event.O2,
          provider_country: category.Value.L,
          provider_id: event.CI.toString(),
          sport_id: league.sport_id,
          start_at: moment.unix(event.S).toDate(),
        };
        await this.bdService.saveEvent(newEvent);
      }
    }
  }

  async indexLeagues() {
    const url = this.configuration.api_url + '/GetChampsZip?sport=:sportId&lng=en&tf=2200000&tz=-5&country=91&virtualSports=true';
    let root: MelbetModel.RootObject;
    const sports = {
      1: Constants.SOCCER_ID,
      2: Constants.TENNIS_ID,
      3: Constants.BASKETBALL,
    };
    for (const keySport in sports) {
      const response = await this.apiService.get(url.replace(':sportId', keySport));
      root = response.data;
      if (root) {
        for (const value of root.Value) {
          const league: LeagueModel = {
            bookmarker_id: this.configuration._id,
            configurations: value.SI,
            provider_country: value.L,
            provider_id: value.LI.toString(),
            provider_name: value.L,
            sport_id: sports[value.SI],
          };
          await this.bdService.saveLeague(league);
        }
      }
    }
  }

}
