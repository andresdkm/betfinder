import { BaseHero } from '../../core/BaseHero';
import { ApiService } from '../../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import Constants from '../../core/Constants';
import { EventModel } from '../../../../common/models/event.model';
import * as moment from 'moment';
import 'moment-timezone';
import Normalize from './Normalize';
import { ConfigService } from '../../../../common/services/config.service';

export class MegaapuestaIndex extends BaseHero {

  constructor(configService: ConfigService, logger: Logger) {
    super(Constants.MEGAAPUESTAS_ID, configService, logger);
    this.apiService.setHeaders({
      'Origin': 'https://www.megapuesta.co',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      'Referer': 'https://www.megapuesta.co/',
    });
  }

  async processEvent(event: EventModel) {
    const url = this.configuration.api_url + 'FEWMatches/MatchOdds?MatchID=' + event.provider_id + '&Culture=es';
    this.logger.debug(url, 'Index event');
    const response = await this.apiService.get(url);
    if (response && response.data) {
      const data = response.data as MegaReaderModel.RootObject;
      event.odds = [];
      if (data && data.t) {
        for (const t of data.t) {
          for (const o of t.o) {
            for (const m of o.m) {
              o.n = o.n.trim();
              m.n = m.n.trim();
              if (Normalize[o.n] && Normalize[o.n][m.n]) {
                let odd = Normalize[o.n][m.n];
                if (Normalize[o.n].european && m.sbv && !m.sbv.includes(':')) {
                  odd = Normalize[o.n].oti[m.n];
                }
                if (m.sbv) {
                  if (Normalize[o.n].asian || (Normalize[o.n].european && !m.sbv.includes(':'))) {
                    m.sbv = m.sbv.includes('-') ? m.sbv : '+' + m.sbv;
                  }
                  event.odds.push({
                    name: odd.replace(':value', m.sbv),
                    provider_name: o.n + ' ' + m.n + ' ' + m.sbv,
                    value: parseFloat(m.o),
                  });
                } else {
                  event.odds.push({
                    name: odd,
                    provider_name: o.n + ' ' + m.n,
                    value: parseFloat(m.o),
                  });
                }
              }

            }
          }
        }
      }
    }
    return event;
  }
}
