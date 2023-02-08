import { BaseHero } from '../../core/BaseHero';
import Constants from '../../core/Constants';
import { ApiService } from '../../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import { EventModel } from '../../../../common/models/event.model';
import Normalize from './Normalize';
import { ConfigService } from '../../../../common/services/config.service';

export class WplayIndex extends BaseHero {

  constructor(configService: ConfigService, logger: Logger) {
    super(Constants.WPLAY_ID, configService, logger);
    this.apiService.setHeaders({
      'Origin': 'https://sb1client-altenar.biahosted.com',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      'Referer': '',
    });
  }

  async processEvent(event: EventModel): Promise<EventModel> {
    const url = this.configuration.api_url + '/GetEventDetails?timezoneOffset=300&langId=4&skinName=wplay&configId=1&culture=es&countryCode=CO&deviceType=Desktop&eventId=' + event.provider_id;
    this.logger.debug(url, 'Wplay url');
    let element: WplayReaderModel.Result;
    const response = await this.apiService.get(url);
    if (response && response.data) {
      const obj = response.data as WplayReaderModel.RootObject;
      element = obj.Result;
      event.odds = [];
      if (element && element.Name && element.MarketGroups) {
        const nameArr = element.Name.split('vs.');
        const home = nameArr[0].trim().toLowerCase();
        const away = nameArr[1].trim().toLowerCase();
        for (const eventBook of element.MarketGroups) {
          for (const item of eventBook.Items) {
            for (const odd of item.Items) {
              const key = odd.Name.toLowerCase().replace(away, '2').replace(home, '1').replace('  ', ' ').trim();
              let itemName = item.Name.toLowerCase();
              itemName = itemName.toLowerCase().replace(home, '1').trim();
              itemName = itemName.toLowerCase().replace(away, '2').trim();
              if (Normalize[itemName]) {
                const value = Normalize[itemName];
                if (value.replace) {
                  let name = '';
                  let match = '';
                  if (value.teams) {
                    const isHome = odd.Name.toLowerCase().includes(home) ? true : false;
                    name = Normalize[itemName].items[isHome ? 'home' : 'away'];
                    match = odd.Name.match(new RegExp(Normalize[itemName].regexp))[0];
                    match = match.replace('(', '');
                    match = match.replace(')', '');
                  } else if (value.over_under) {
                    const isOver = odd.Name.toLowerCase().includes('enos') ? false : true;
                    name = Normalize[itemName].items[isOver ? 'over' : 'under'];
                    match = odd.Name.match(new RegExp(Normalize[itemName].regexp))[0];
                    match = match.replace('(', '');
                    match = match.replace(')', '');
                  }
                  event.odds.push({
                    name: name.replace(':value', match),
                    provider_name: item.Name + ' ' + odd.Name,
                    value: odd.Price,
                  });
                } else if (Normalize[itemName][key]) {
                  event.odds.push({
                    name: Normalize[itemName][key],
                    provider_name: item.Name + ' ' + odd.Name,
                    value: odd.Price,
                  });
                }
              } else {
                // console.log('Not found', key);
              }
            }
          }

        }
      }

    }

    return event;
  }

}
