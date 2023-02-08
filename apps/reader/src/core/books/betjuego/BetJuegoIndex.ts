import { BdService } from '../../../../bd/bd.service';
import { ApiService } from '../../../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import { LeagueModel } from '../../../../../common/models/league.model';
import { EventModel } from '../../../../../common/models/event.model';
import { BaseBookIndex } from '../../app/BaseBookIndex';
import Constants from '../../app/Constants';
import { Util } from '../../../../../common/util';
import * as puppeteer from 'puppeteer';

export class BetJuegoIndex extends BaseBookIndex {

  constructor(bdService: BdService, apiService: ApiService, logger: Logger) {
    super(Constants.BETJUEGO_ID, bdService, apiService, logger);
    this.bdService = bdService;
    this.apiService.setHeaders({
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      'referer': 'https://sports.betjuego.co/',
      'origin': 'https://sports.betjuego.co/',
    });
  }

  private async parseEvent(event: BetjuegoReaderModel.D, league: LeagueModel) {
    const nameArr = event.DS.split('|v|');
    const dataEvent: EventModel = {
      home: nameArr[0].replace(/\|/g, ''),
      away: nameArr[1].replace(/\|/g, ''),
      name: event.DS.replace('|v|', ' - ').replace(/\|/g, '').trim(),
      home_en: nameArr[0].replace(/\|/g, ''),
      away_en: nameArr[1].replace(/\|/g, ''),
      name_en: event.DS.replace('|v|', ' - ').replace(/\|/g, '').trim(),
      league: event.GN,
      provider_id: event.ID,
      provider_country: event.SG,
      bookmarker_id: this.configuration._id,
      sport_id: league.sport_id,
      start_at: Util.getTimezone(event.STARTDATE),
    };
    await this.bdService.saveEvent(dataEvent);
  }

  protected async getLeague(league: LeagueModel) {
    let url = this.configuration.events_url.replace(':eventId', league.provider_id.toString());
    if (league.sport_id == Constants.SOCCER_ID) {
      url = url.replace(':groupId', '1');
    }

    if (league.sport_id == Constants.TENNIS_ID) {
      url = url.replace(':groupId', '61');
    }

    if (league.sport_id == Constants.BASKETBALL) {
      url = url.replace(':groupId', '12');
    }

    if (league.sport_id == Constants.AMERICAN_FOOTBALL) {
      url = url.replace(':groupId', '107');
    }

    if (league.sport_id == Constants.HOCKEY) {
      url = url.replace(':groupId', '14');
    }

    this.logger.debug(url);
    const res = await this.apiService.get(url);
    const events = res.data.D.E;
    for (const event of events) {
      await this.parseEvent(event, league);
    }
    await Util.delay();
  }

  async indexLeagues() {
    const browser = await puppeteer.launch({
      headless: Constants.HEADLESS,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    const version = await browser.version();
    this.logger.debug(`Making browser with ${version}`);
    await page.goto(this.configuration.url);
    const links = [
      {
        id: 'left_prematch_sport-177_american_football_label-toggle',
        sport_id: Constants.AMERICAN_FOOTBALL,
        toggle: 'left_prematch_sport-177_american_football_sg',
      },
      {
        id: 'left_prematch_sport-4_ice_hockey_label-toggle',
        sport_id: Constants.HOCKEY,
        more: 'left_prematch_sport-4_ice_hockey_buttonmore-toggle',
        toggle: 'left_prematch_sport-4_ice_hockey_sg',
      },
      {
        id: 'left_prematch_sport-1_soccer_label-toggle',
        sport_id: Constants.SOCCER_ID,
        more: 'left_prematch_sport-1_soccer_buttonmore-toggle',
        toggle: 'left_prematch_sport-1_soccer_sg',
      },
      {
        id: 'left_prematch_sport-2_basketball_label-toggle',
        sport_id: Constants.BASKETBALL,
        more: 'left_prematch_sport-2_basketball_buttonmore-toggle',
        toggle: 'left_prematch_sport-2_basketball_sg',
      },
      {
        id: 'left_prematch_sport-5_tennis_label-toggle',
        sport_id: Constants.TENNIS_ID,
        toggle: 'left_prematch_sport-5_tennis_sg',
      },
      /* {
           id: 'left_prematch_sport-3_baseball_label-toggle',
           sport_id: Constants.BASEBALL,
           toggle: 'left_prematch_sport-3_baseball_sg'
       }*/
    ];

    for (const link of links) {
      try {
        await page.waitForSelector('#' + link.id)
          .then(async () => {
            this.logger.debug('Load page');
          });
        await page.$eval('#' + link.id, elem => elem.click());
        await Util.delay();
        if (link.more) {
          try {
            await page.waitForSelector('#' + link.more);
            await page.$eval('#' + link.more, elem => elem.click());
            await Util.delay();
          } catch (error) {
            this.logger.error(error, 'Not found ');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const clickThemAll = await page.$$eval('[id^="' + link.toggle + '"]', links => links.map(link => {
          return link.id;
        }));

        for (const x of clickThemAll) {
          await page.$eval('#' + x, elem => elem.click());
          const data = await page.$eval('#' + x, element => {
            const parent = element.parentElement;
            const response = [];
            const country = parent.querySelector('.pr5').innerText;
            const items = parent.querySelectorAll('.side-nav-league__link');
            for (const item of items) {
              response.push({
                provider_country: country,
                provider_name: item.innerText,
                provider_id: item.id.match(/(\d){4,}/)[0],
              });
            }
            return response;
          });
          if (data.length > 0) {
            for (const i of data) {
              i.sport_id = link.sport_id;
              i.bookmarker_id = this.configuration._id;
              await this.bdService.saveLeague(i);

            }
          }
          await Util.delay();
        }
      } catch (error) {
        this.logger.error(error, 'Not found ');
      }
    }

  }
}
