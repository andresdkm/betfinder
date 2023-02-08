import { BaseHero } from '../../core/BaseHero';
import { ApiService } from '../../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import Constants from '../../core/Constants';
import { EventModel } from '../../../../common/models/event.model';
import * as moment from 'moment';
import 'moment-timezone';
import Normalize from './Normalize';
import { ConfigService } from '../../../../common/services/config.service';

export class ColbetIndex extends BaseHero {

    constructor(configService: ConfigService, logger: Logger) {
        super(Constants.COLBET_ID, configService, logger);
        this.apiService.setHeaders({
            'Origin': 'https://www.colbet.co',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
            'Referer': 'https://www.colbet.co/frame.jsp?openpage=sport',
            'sessionId': null,
            'siteId': 2,
            'timezone': 300,
            'lang': 'en',
        });
    }

    async processEvent(event: EventModel): Promise<any> {
        const url = this.configuration.api_url + 'prematch/matchdetail';
        let eventColbet: ColbetModel.Event;
        const res = await this.apiService.post(url, {
            eventId: event.provider_id,
        });
        if (res && res.data) {
            eventColbet = res.data as ColbetModel.Event;
            event.odds = [];
            const home = eventColbet.homeTeam;
            for (const market of eventColbet.markets) {
                if (Normalize[market.template]) {
                    const norm = Normalize[market.template];
                    // tslint:disable-next-line:forin
                    for (const key in market.odds) {
                        for (const item of market.odds[key]) {
                            if (norm.teams) {
                                const index = item.participant === home ? 'home' : 'away';
                                event.odds.push({
                                    name: norm.items[index][item.outcome].replace(':value', (item.participant === home ? item.paramA : item.paramB)),
                                    provider_name: '',
                                    value: item.value,
                                });
                            } else if (norm.handicaps) {
                                event.odds.push({
                                    name: norm.items[item.outcome].replace(':value', (item.participant === home ? item.paramA : item.paramB)),
                                    provider_name: '',
                                    value: item.value,
                                });
                            } else if (norm.replace) {
                                event.odds.push({
                                    name: norm.items[item.outcome].replace(':value', item.paramA),
                                    provider_name: '',
                                    value: item.value,
                                });
                            } else {
                                event.odds.push({
                                    name: norm.items[item.outcome],
                                    provider_name: '',
                                    value: item.value,
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
