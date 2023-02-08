import { BaseHero } from '../../core/BaseHero';
import { ApiService } from '../../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import Constants from '../../core/Constants';
import * as moment from 'moment';
import 'moment-timezone';
import { EventModel } from '../../../../common/models/event.model';
import Normalize from './Normalize';
import { ConfigService } from '../../../../common/services/config.service';

export class BetalfaIndex extends BaseHero {

  constructor(configService: ConfigService, logger: Logger) {
    super(Constants.BETALFA_ID, configService, logger);
    this.apiService.setHeaders({
      'Origin': 'https://sports.betalfa.co',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      'ExternalUserID': null,
      'Provider': 0,
      'TimeOffset': 300,
      'Token': '',
      'TokenType': 0,
      'X-Requested-With': 'XMLHttpRequest',
      'Referer': 'https://sports.betalfa.co/es?timestamp=1570762670&removet=1&lang=es&currencyCode=COP&brandId=',
      'Culture': 'en',
    });
  }

  async processEvent(event: EventModel) {
    const date = moment().tz('America/Bogota');
    const toDate = moment().add(1, 'year').tz('America/Bogota');
    const time = date.toDate().getTime();
    const data = {
      BetSlip: null,
      MatchID: event.provider_id,
      scoreCast: 2,
      TimeOffset: 300,
      Culture: 'es',
      OddFormat: '0',
      type: 0,
      provider: 0,
      ExternalUserID: null,
      Token: '',
    };
    let eventBook: BetalfaReaderModel.RootObject[];
    const url = this.configuration.api_url + 'Fixtures/GetMatchDetailOdds';
    this.logger.debug(JSON.stringify([url, data]), 'Betalfa url');
    const response = await this.apiService.post(url, data);
    if (response && response.data) {
      eventBook = response.data as BetalfaReaderModel.RootObject[];
      event.odds = [];
      for (const item of eventBook) {
        if (item && item.OddTypes) {
          for (const odd of item.OddTypes) {
            for (const outcome of odd.Outcomes) {
              const itemName = odd.Name.replace('  ', ' ');
              if (Normalize[itemName]) {
                const value = Normalize[itemName];
                if (value.replace) {
                  let name = '';
                  let match = '';
                  if (value.asian) {
                    match = outcome.Outcome.match(new RegExp(Normalize[itemName].regexp))[0];
                    const isHome = outcome.Outcome.replace(match, '').includes('1') ? true : false;
                    name = Normalize[itemName].items[isHome ? 'home' : 'away'];
                    match = outcome.Outcome.match(new RegExp(Normalize[itemName].regexp))[0];
                    match = match.replace('(', '');
                    match = match.replace(')', '');
                    match = match.includes('-') ? match : '+' + match;
                  } else if (value.over_under) {
                    const isOver = outcome.Outcome.includes('enos') ? false : true;
                    name = Normalize[itemName].items[isOver ? 'over' : 'under'];
                    match = outcome.Outcome.match(new RegExp(Normalize[itemName].regexp))[0];
                    match = match.replace('(', '');
                    match = match.replace(')', '');
                  }
                  event.odds.push({
                    name: name.replace(':value', match),
                    provider_name: odd.Name + ' ' + outcome.Outcome,
                    value: parseFloat(outcome.Odd),
                  });
                } else if (Normalize[itemName][outcome.Outcome]) {
                  event.odds.push({
                    name: Normalize[itemName][outcome.Outcome],
                    provider_name: odd.Name + ' ' + outcome.Outcome,
                    value: parseFloat(outcome.Odd),
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
