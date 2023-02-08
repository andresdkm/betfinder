import { BaseHero } from '../../core/BaseHero';
import { ApiService } from '../../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import Constants from '../../core/Constants';
import { EventModel } from '../../../../common/models/event.model';
import Normalize from './Normalize';
import { ConfigService } from '../../../../common/services/config.service';

export class BetJuegoIndex extends BaseHero {

  constructor(configService: ConfigService, logger: Logger) {
    super(Constants.BETJUEGO_ID, configService, logger);
    this.apiService.setHeaders({
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      'referer': 'https://sports.betjuego.co/',
      'origin': 'https://sports.betjuego.co/',
    });
  }

  async processEvent(event: EventModel) {
    const url = this.configuration.api_url + '/GetEvent?EVENTID=' + event.provider_id + '&v_cache_version=1.91.3.42';
    this.logger.debug(url, 'Betjuego url');
    let eventBook: BetjuegoReaderModel.D;
    const response = await this.apiService.get(url);
    if (response && response.data) {
      const obj = response.data as BetjuegoReaderModel.RootObject;
      eventBook = obj.D;
      event.odds = [];
      if (eventBook) {
        // tslint:disable-next-line:forin
        for (const key in eventBook.O) {
          const parts = key.split('@');
          if (parts.length > 1) {
            const betId = parts[0];
            const betValue = parts[1];
            if (Normalize[betId]) {
              const odd = Normalize[betId];
              if (odd.replace) {
                if (odd.over_under) {
                  const parts2 = betValue.split('_');
                  if (odd.items[parts2[1]]) {
                    event.odds.push({
                      name: odd.items[parts2[1]].replace(':value', parts2[0]),
                      provider_name: this.findName(betId, eventBook),
                      value: eventBook.O[key],
                    });
                  }
                } else if (odd.asian) {
                  const parts2 = betValue.split('_');
                  if (odd.items[parts2[1]]) {
                    let value = '';
                    if (parts2[1].includes('1')) {
                      value = parts2[0].includes('-') ? parts2[0] : '+' + parts2[0];
                    } else {
                      value = parts2[0].includes('-') ? '+' + parts2[0].replace('-', '') : '-' + parts2[0];
                    }
                    event.odds.push({
                      name: odd.items[parts2[1]].replace(':value', value),
                      provider_name: this.findName(betId, eventBook),
                      value: eventBook.O[key],
                    });
                  }
                }
              } else {
                if (Normalize[key]) {
                  const names = key.split('_');
                  let name = names[0];
                  if (names.length > 2) {
                    name = names[0] + '_' + names[1];
                  }
                  event.odds.push({
                    name: Normalize[key],
                    provider_name: this.findName(betId, eventBook),
                    value: eventBook.O[key],
                  });
                }
              }
            } else {
              if (Normalize[key]) {
                const names = key.split('_');
                let name = names[0];
                if (names.length > 2) {
                  name = names[0] + '_' + names[1];
                }
                event.odds.push({
                  name: Normalize[key],
                  provider_name: this.findName(betId, eventBook),
                  value: eventBook.O[key],
                });
              }
            }
          } else {
            if (Normalize[key]) {
              const names = key.split('_');
              let name = names[0];
              if (names.length > 2) {
                name = names[0] + '_' + names[1];
              }
              event.odds.push({
                name: Normalize[key],
                provider_name: this.findName(name, eventBook),
                value: eventBook.O[key],
              });
            }
          }

        }
      }
      // console.log('odds', event.odds);
    }

    return event;
  }

  private findName(key: string, model: BetjuegoReaderModel.D) {
    let name = '';
    for (const item of model.MK) {
      if (item.ID === key) {
        name = item.DS;
        break;
      }
    }
    return name;
  }

}
