import { BaseBookIndex } from '../../app/BaseBookIndex';
import Constants from '../../app/Constants';
import { LeagueModel } from '../../../../../common/models/league.model';
import { Util } from '../../../../../common/util';
import { EventModel } from '../../../../../common/models/event.model';
import { Inject, Logger } from '@nestjs/common';
import { BdService } from '../../../../bd/bd.service';
import { ApiService } from '../../../../../common/services/api.service';

export class WplayIndex extends BaseBookIndex {

  constructor(bdService: BdService, apiService: ApiService, logger: Logger) {
    super(Constants.WPLAY_ID, bdService, apiService, logger);
    this.bdService = bdService;
    this.apiService.setHeaders({
      'Origin': 'https://sb1client-altenar.biahosted.com',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      'Referer': '',
    });
  }

  private async parseEvent(event: WplayEventModel.Event, league: LeagueModel) {
    const eventOpenBet: EventModel = {
      away: event.Competitors[1].Name.replace('1.', '').trim(),
      away_en: event.Competitors[1].Name.replace('1.', '').trim(),
      bookmarker_id: this.configuration._id,
      provider_country: event.CategoryName,
      home: event.Competitors[0].Name.replace('1.', '').trim(),
      home_en: event.Competitors[0].Name.replace('1.', '').trim(),
      league: event.ChampName,
      name: event.Name.replace('vs.', '-').replace('1.', '').trim(),
      name_en: event.Name.replace('vs.', '-').replace('1.', '').trim(),
      provider_id: event.Id,
      sport_id: league.sport_id,
      start_at: Util.parseDate(event.EventDate),
    };
    await this.bdService.saveEvent(eventOpenBet);
  }

  protected async getLeague(league: LeagueModel) {
    const startDate = Util.getDatetime();
    const endDate = Util.addDays(7);
    let url = this.configuration.api_url + 'GetEvents?timezoneOffset=300&langId=4&skinName=wplay&configId=1&culture=en&countryCode=CO&deviceType=Desktop&sportids=0&categoryids=0&champids=' + league.provider_id + '&group=AllEvents&period=periodall&withLive=false&outrightsDisplay=none&couponType=0' +
      '&startDate=' + startDate + '&endDate=' + endDate;
    if (Number(league.provider_id) < 0) {
      url = this.configuration.api_url + 'GetEvents?timezoneOffset=300&langId=4&skinName=wplay&configId=1&culture=en&countryCode=CO&deviceType=Desktop&sportids=0&categoryids=0&champids=' + league.configurations + '&group=AllEvents&period=periodall&withLive=false&outrightsDisplay=none&couponType=0' +
        '&startDate=' + startDate + '&endDate=' + endDate;
    }
    let events = [];
    this.logger.debug(url);
    const response = await this.apiService.get(url);
    const root = response.data as WplayEventModel.RootObject;
    if (root.Result.Items.length > 0) {
      events = root.Result.Items[0].Events;
    }
    for (const event of events) {
      await this.parseEvent(event, league);
    }
    await Util.delay();
  }

  async indexLeagues() {
    const startDate = Util.getDatetime();
    const endDate = Util.addYear(1);
    const sports = [
      {
        id: 1,
        key: Constants.SOCCER_ID,
      },
      {
        id: 4,
        key: Constants.TENNIS_ID,
      },
      {
        id: 12,
        key: Constants.BASKETBALL,
      },
      {
        id: 13,
        key: Constants.BASEBALL,
      },
      {
        id: 16,
        key: Constants.HOCKEY,
      },
      {
        id: 20,
        key: Constants.AMERICAN_FOOTBALL,
      },
    ];
    for (const sport of sports) {
      const url = this.configuration.api_url + 'GetMenuBySport?timezoneOffset=300&langId=4&skinName=wplay&configId=1&culture=es&countryCode=CO&deviceType=Desktop&sportId=' + sport.id +
        '&period=periodall&startDate=' + startDate + '&endDate=' + endDate;

      this.logger.debug(url);
      const response = await this.apiService.get(url);
      const groups = response.data;
      for (const event of groups.Result[0].Items) {
        for (const item of event.Items) {
          await this.bdService.saveLeague(
            {
              bookmarker_id: this.configuration._id,
              configurations: item.ChampionshipIds.trim(),
              provider_country: event.Name,
              provider_id: item.Id,
              provider_name: item.Name,
              sport_id: sport.key,
            },
          );
        }
      }
    }
    return true;
  }

}
