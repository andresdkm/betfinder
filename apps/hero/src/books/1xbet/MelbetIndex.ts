import { BaseHero } from '../../core/BaseHero';
import { ApiService } from '../../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import Constants from '../../core/Constants';
import { EventModel } from '../../../../common/models/event.model';
import Normalize from './Normalize';
import { ConfigService } from '../../../../common/services/config.service';

export class MelbetIndex extends BaseHero {

  constructor(configService: ConfigService, logger: Logger) {
    super(Constants.MELBET_ID, configService, logger);
    this.apiService.setHeaders({
      'Origin': '1xbet.pe',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      'Referer': 'https://1xbet.pe/es/line/Football/',
    });
  }

  async processEvent(event: EventModel): Promise<any> {
    const url = this.configuration.api_url + '/GetGameZip?id=' + event.provider_id + '&lng=en&cfview=0&isSubGames=true&GroupEvents=true&allEventsGroupSubGames=true&countevents=500';
    let root: MelbetModel.RootObject2;
    const res = await this.apiService.get(url);
    root = res.data as MelbetModel.RootObject2;
    event.odds = [];
    if (root && root.Value) {
      for (const ge of root.Value.GE) {
        for (const index of ge.E) {
          for (const e of index) {
            if (Normalize[e.T]) {
              const norm = Normalize[e.T];
              if (norm.european) {
                if (e.P < 0) {
                  event.odds.push({
                    name: norm.name.replace(':value', '0:' + Math.abs(e.P)),
                    provider_name: '',
                    value: e.C,
                  });
                } else {
                  event.odds.push({
                    name: norm.name.replace(':value', Math.abs(e.P) + ':0'),
                    provider_name: '',
                    value: e.C,
                  });
                }
              } else if (norm.asian) {
                if (!e.P) {
                  e.P = 0;
                }
                event.odds.push({
                  name: norm.name.replace(':value', e.P > 0 ? '+' + e.P : e.P),
                  provider_name: '',
                  value: e.C,
                });
              } else if (norm.replace) {
                if (!e.P) {
                  e.P = 0;
                }
                event.odds.push({
                  name: norm.name.replace(':value', e.P),
                  provider_name: '',
                  value: e.C,
                });
              } else {
                event.odds.push({
                  name: norm.name,
                  provider_name: '',
                  value: e.C,
                });
              }

            }
          }
        }
      }
    }
    return event;
  }
}
