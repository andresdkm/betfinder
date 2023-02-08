import Constants from '../../app/Constants';
import { BaseBookIndex } from '../../app/BaseBookIndex';
import { BdService } from '../../../../bd/bd.service';
import { ApiService } from '../../../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import { EventModel } from '../../../../../common/models/event.model';
import { Util } from '../../../../../common/util';
import { LeagueModel } from '../../../../../common/models/league.model';
// @ts-ignore
import RootObject = MegaLeagueModel.RootObject;

export class MegaapuestaIndex extends BaseBookIndex {

  constructor(bdService: BdService, apiService: ApiService, logger: Logger) {
    super(Constants.MEGAAPUESTAS_ID, bdService, apiService, logger);
    this.bdService = bdService;
    this.apiService.setHeaders({
      'Origin': 'https://www.megapuesta.co',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      'Referer': 'https://www.megapuesta.co/',
    });
  }

  async indexLeagues() {
    let response: RootObject;
    this.logger.debug(this.configuration.leagues_url, 'Index Leagues');
    const res = await this.apiService.get(this.configuration.leagues_url);
    response = res.data as RootObject;
    if (response.s) {
      for (const fixture of response.s) {
        let sportId = null;
        switch (fixture.id) {
          case 1:
            sportId = Constants.SOCCER_ID;
            break;
          case 2:
            sportId = Constants.BASKETBALL;
            break;
          case 3:
            sportId = Constants.BASEBALL;
            break;
          case 4:
            sportId = Constants.HOCKEY;
            break;
          case 5:
            sportId = Constants.TENNIS_ID;
            break;
          case 14:
            sportId = Constants.AMERICAN_FOOTBALL;
            break;
          /* case 18:
               sportId = Constants.VOLLEYBALL;
               break;*/

        }
        if (sportId) {
          for (const item of fixture.i) {
            for (const league of item.i) {
              const data: LeagueModel = {
                provider_country: league.n,
                provider_name: item.n,
                provider_id: league.id.toString(),
                sport_id: sportId,
                bookmarker_id: this.configuration._id,
                configurations: null,
              };
              await this.bdService.saveLeague(data);
            }
          }
        }

      }

    }
  }

  protected async getLeague(league: LeagueModel): Promise<any> {
    const url = this.configuration.api_url + 'FEWFixture/GroupedMatches?Culture=en&TournamentData[]=' + league.provider_id + '&TimeFilter=0&NumberOfOddTypes=4';
    this.logger.debug(url, 'Finding events in league');
    const res = await this.apiService.get(url);
    let responseData = res.data as Array<MegaEventModel.RootObject>;
    for(let item of responseData){
      for (let t of item.t) {
        for (let m of t.m) {
          const eventOpenBet: EventModel = {
            away: m.at,
            bookmarker_id: this.configuration._id,
            provider_country: t.nc,
            home: m.ht,
            league: t.nt,
            name: m.ht + ' - ' + m.at,
            provider_id: m.mid.toString(),
            sport_id: league.sport_id,
            start_at: Util.getSimpleDate(m.d),
          };
          eventOpenBet.name_en = eventOpenBet.name;
          eventOpenBet.home_en = eventOpenBet.home;
          eventOpenBet.away_en = eventOpenBet.away;
          await this.bdService.saveEvent(eventOpenBet);
        }
      }
    }

  }

}
