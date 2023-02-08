import { ApiService } from '../../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import { BaseHero } from '../../core/BaseHero';
import Constants from '../../core/Constants';
import { EventModel } from '../../../../common/models/event.model';
import Normalize from './Normalize';
import { ConfigService } from '../../../../common/services/config.service';

export class BetplayIndex extends BaseHero {

  constructor(configService: ConfigService, logger: Logger) {
    super(Constants.BETPLAY_ID, configService, logger);
    this.apiService.setHeaders({
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      'Referer': 'https://betplay.com.co/apuestas',
      'Origin': 'https://betplay.com.co',
    });
  }

  async processEvent(event: EventModel): Promise<any> {

    const url = 'https://us1-api.aws.kambicdn.com/offering/v2018/bp/betoffer/event/' + event.provider_id + '.json?lang=es_ES&market=CO&client_id=2&channel_id=1&ncid=' + new Date().getTime() + '&includeParticipants=true';
    this.logger.debug(url, 'Betplay url');
    let offers: BetplayModel.BetOffer[];
    const response = await this.apiService.get(url);
    event.odds = [];
    if (response && response.data) {
      const respons: BetplayModel.RootObject = response.data as BetplayModel.RootObject;
      const home = respons.events[0].homeName;
      const away = respons.events[0].awayName;
      offers = respons.betOffers;
      for (const item of offers) {
        const key = item.criterion.englishLabel.trim();
        if (Normalize[key]) {
          for (const outcome of item.outcomes) {
            let outcomeKey = outcome.englishLabel;
            outcomeKey = outcomeKey.replace(home, '1').replace('  ', '');
            outcomeKey = outcomeKey.replace(away, '2').replace('  ', '');
            if (Normalize[key][outcomeKey]) {
              if (Normalize[key].handicap) {
                const line = outcome.line;
                event.odds.push({
                  name: Normalize[key][outcomeKey].replace(':value', line < 0 ? ('-' + Math.abs(line / 1000)) : ('+' + Math.abs(line / 1000))),
                  provider_name: item.criterion.label + ' ' + outcome.label,
                  value: (outcome.odds / 1000),
                });
              } else if ((key === '3-Way Handicap' || key === '3-Way Handicap - 1st Half' || key === '3-Way Handicap - 2nd Half') && (outcome.type === 'OT_ONE' || outcome.type === 'OT_CROSS' || outcome.type === 'OT_TWO')) {
                const line = outcome.line;
                event.odds.push({
                  name: Normalize[key][outcomeKey].replace(':value', line < 0 ? ('0:' + Math.abs(line / 1000)) : (Math.abs(line / 1000) + ':0')),
                  provider_name: item.criterion.label + ' ' + outcome.label,
                  value: (outcome.odds / 1000),
                });
              } else if (outcome.type === 'OT_OVER' || outcome.type === 'OT_UNDER') {
                event.odds.push({
                  name: Normalize[key][outcomeKey].replace(':value', (outcome.line / 1000)),
                  provider_name: item.criterion.label + ' ' + outcome.label,
                  value: (outcome.odds / 1000),
                });
              } else {
                event.odds.push({
                  name: Normalize[key][outcomeKey],
                  provider_name: item.criterion.label + ' ' + outcome.label,
                  value: (outcome.odds / 1000),
                });
              }

            }
          }
        } else {
          // console.log('NOT FOUND', key);
        }
      }
    }
    return event;
  }
}
