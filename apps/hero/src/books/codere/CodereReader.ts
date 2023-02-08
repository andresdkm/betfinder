import { BaseHero } from '../../core/BaseHero';
import Constants from '../../core/Constants';
import { ApiService } from '../../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import { EventModel } from '../../../../common/models/event.model';
import Normalize from './Normalize';
import { ConfigService } from '../../../../common/services/config.service';
// @ts-ignore
import OddInterface = CodereReaderModel.OddInterface;

export class CodereReader extends BaseHero {

  constructor(configService: ConfigService, logger: Logger) {
    super(Constants.CODERE_ID, configService, logger);
    this.apiService.setHeaders({
      'Host': 'm.codere.com.co',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      'Referer': 'https://m.codere.com.co/deportescolombia/',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
    });
  }

  async processEvent(event: EventModel): Promise<EventModel> {
    const url = this.configuration.api_url + 'home/GetGamesNoLive?parentid=' + event.provider_id + '&languageCode=es-co';
    this.logger.debug(url, 'Codere url');
    const response = await this.apiService.get(url);
    event.odds = [];
    if (response && response.data) {
      const odds = response.data as OddInterface[];
      const home = event.home;
      const away = event.away;
      const name = event.name.split('-');
      const home2 = name[0].trim();
      const away2 = name[1].trim();
      for (const odd of odds) {
        let eventName = odd.Name.replace(away, '2').replace(home, '1').trim();
        eventName = eventName.replace(away2, '2').replace(home2, '1').trim();
        eventName = eventName.toLowerCase();
        const item = Normalize[eventName];
        if (item) {
          for (const result of odd.Results) {
            let key = result.Name.replace(away, '2').replace(home, '1').trim();
            key = key.replace(away2, '2').replace(home2, '1').trim();
            if (item.replace && item.over_under) {
              const isOver = key.includes('Menos') ? false : true;
              const overUnder = item.items[isOver ? 'over' : 'under'];
              const value = result.Name.match(new RegExp(item.regexp))[0];
              event.odds.push({
                name: overUnder.replace(':value', Number(value)),
                provider_name: odd.Name + ' ' + result.Name,
                value: result.Odd,
              });
            } else if (item.replace) {
              const isHome = (result.Name.includes(home) ||  result.Name.includes(home2)) ? true : false;
              const isNegative = key.includes('+') ? false : true;
              const homeAway = item.items[isHome ? '1' : '2'];
              const value = result.Name.match(new RegExp(item.regexp))[0];
              event.odds.push({
                name: homeAway.replace(':value', (isNegative ? '-' : '+' ) + Number(value)),
                provider_name: odd.Name + ' ' + result.Name,
                value: result.Odd,
              });
            } else {
              event.odds.push({
                name: item[key],
                provider_name: odd.Name + ' ' + result.Name,
                value: result.Odd,
              });
            }
          }
        }
      }
    }
    return event;
  }

}
