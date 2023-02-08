import { BaseBookIndex } from '../../app/BaseBookIndex';
import { BdService } from '../../../../bd/bd.service';
import { ApiService } from '../../../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import Constants from '../../app/Constants';
import { LeagueModel } from '../../../../../common/models/league.model';
import { EventModel } from '../../../../../common/models/event.model';
import { Util } from '../../../../../common/util';

export class BetplayIndex extends BaseBookIndex {

  constructor(bdService: BdService, apiService: ApiService, logger: Logger) {
    super(Constants.BETPLAY_ID, bdService, apiService, logger);
    this.bdService = bdService;
    this.apiService.setHeaders({
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      'Referer': 'https://betplay.com.co/apuestas',
      'Origin': 'https://betplay.com.co',
    });
  }

  private async parseEvent(item, league: LeagueModel) {
    const event = item.event;
    const translates = event.englishName.split('-');
    if (event && event.awayName) {
      const dataEvent: EventModel = {
        away: event.awayName.replace('1.', '').trim(),
        bookmarker_id: this.configuration._id,
        home: event.homeName.replace('1.', '').trim(),
        name_en: event.englishName.replace('1.', '').trim(),
        league: event.group,
        name: event.name,
        provider_country: event.path.length > 2 ? event.path[1].name : '',
        provider_id: event.id,
        sport_id: league.sport_id,
        start_at: Util.getSimpleDate(event.start),
      };
      if (translates.length > 1) {
        dataEvent.home_en = translates[0].replace('1.', '').trim();
        dataEvent.away_en = translates[1].replace('1.', '').trim();
      }
      await this.bdService.saveEvent(dataEvent);
    }
  }

  protected async getLeague(league: LeagueModel) {
    const resources = [];
    for (const g of league.configurations) {
      resources.push(g.termKey);
    }
    // tslint:disable-next-line:max-line-length
    const url = this.configuration.api_url + 'listView/' + resources.join('/') + '.json?lang=es_ES&market=CO&client_id=2&channel_id=1&ncid=' + new Date().getTime() + '&useCombined=true';
    const res = await this.apiService.get(url);
    const events = res.data.events;
    if (events) {
      for (const e of events) {
        await this.parseEvent(e, league);
      }
    }

    await Util.delay();
  }

  async indexLeagues() {
    this.logger.debug(this.configuration.leagues_url, 'Finding leagues ');
    const res = await this.apiService.get(this.configuration.leagues_url);
    const groups: any[] = res.data.group.groups;
    for (const group of groups) {
      let sportId = null;
      switch (group.name) {
        case 'Fútbol':
          sportId = Constants.SOCCER_ID;
          break;
        case 'Tenis':
          sportId = Constants.TENNIS_ID;
          break;
        case 'Baloncesto':
          sportId = Constants.BASKETBALL;
          break;
        case 'Hockey Hielo':
          sportId = Constants.HOCKEY;
          break;
        case 'Voleibol':
          sportId = Constants.VOLLEYBALL;
          break;
        case 'Béisbol':
          sportId = Constants.BASEBALL;
          break;
        case 'Fútbol Americano':
          sportId = Constants.AMERICAN_FOOTBALL;
          break;
      }
      if (sportId && group) {
        for (const event of group.groups) {
          if (event.groups) {
            for (const item of event.groups) {
              const data: LeagueModel = {
                provider_country: event.name,
                provider_name: item.name,
                provider_id: item.id,
                sport_id: sportId,
                bookmarker_id: this.configuration._id,
                configurations: [
                  {
                    provider_id: group.id,
                    name: group.name,
                    termKey: group.termKey,
                    level: 1,
                  },
                  {
                    provider_id: event.id,
                    name: event.name,
                    termKey: event.termKey,
                    level: 2,
                  },
                  {
                    provider_id: item.id,
                    name: item.name,
                    termKey: item.termKey,
                    level: 3,
                  },
                ],
              };
              await this.bdService.saveLeague(data);
            }
          } else {
            const data: LeagueModel = {
              provider_country: event.name,
              provider_name: event.name,
              provider_id: event.id,
              sport_id: sportId,
              bookmarker_id: this.configuration._id,
              configurations: [
                {
                  provider_id: group.id,
                  name: group.name,
                  termKey: group.termKey,
                  level: 1,
                },
                {
                  provider_id: event.id,
                  name: event.name,
                  termKey: event.termKey,
                  level: 2,
                },
              ],
            };
            await this.bdService.saveLeague(data);
          }
        }

      }

    }
  }

}
