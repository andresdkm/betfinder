import { BdService } from '../../../../bd/bd.service';
import { ApiService } from '../../../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import { BaseBookIndex } from '../../app/BaseBookIndex';
import Constants from '../../app/Constants';
import { LeagueModel } from '../../../../../common/models/league.model';
import { EventModel } from '../../../../../common/models/event.model';
import 'moment-timezone';
import * as moment from 'moment';

export class CodereIndex extends BaseBookIndex {

  constructor(bdService: BdService, apiService: ApiService, logger: Logger) {
    super(Constants.CODERE_ID, bdService, apiService, logger);
    this.bdService = bdService;
    this.apiService.setHeaders({
      'Host': 'm.codere.com.co',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      'Referer': 'https://m.codere.com.co/deportescolombia/',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
    });
  }

  protected async getLeague(league: LeagueModel) {
    const url = this.configuration.api_url + 'home/GetEvents?parentid=' + league.provider_id + '&languageCode=es-co';
    const res = await this.apiService.get(url);
    if (res && res.data) {
      const events = res.data as CodereModel.EventInterface[];
      for (const event of events) {
        if (event && event.Participants && event.Participants.length > 0) {
          const startDate = event.StarDate.replace('/Date(', '').replace(')/', '');
          const newEvent: EventModel = {
            // tslint:disable-next-line:max-line-length
            away: event.Participants[0].IsHome ? event.Participants[1].LocalizedNames.LocalizedValues[0].Value : event.Participants[0].LocalizedNames.LocalizedValues[0].Value,
            away_en: event.Participants[0].IsHome ? event.Participants[1].LocalizedNames.LocalizedValues[0].Value : event.Participants[0].LocalizedNames.LocalizedValues[0].Value,
            bookmarker_id: this.configuration._id,
            home: event.Participants[0].IsHome ? event.Participants[0].LocalizedNames.LocalizedValues[0].Value : event.Participants[1].LocalizedNames.LocalizedValues[0].Value,
            home_en: event.Participants[0].IsHome ? event.Participants[0].LocalizedNames.LocalizedValues[0].Value : event.Participants[1].LocalizedNames.LocalizedValues[0].Value,
            league: event.LeagueName,
            name: event.Name,
            name_en: event.Name,
            provider_country: event.CountryCode,
            provider_id: event.NodeId,
            sport_id: league.sport_id,
            start_at: moment(Number(startDate)).toDate(),
          };
          await this.bdService.saveEvent(newEvent);
        }
      }
    }
  }

  async indexLeagues(): Promise<any> {
    const url = this.configuration.api_url + 'home/GetSports?languageCode=es-co';
    let root: CodereModel.SportInterface[] = [];
    const res = await this.apiService.get(url);
    if (res && res.data) {
      root = res.data as CodereModel.SportInterface[];
      const sports = {
        103843409: Constants.SOCCER_ID,
        103843131: Constants.BASKETBALL,
        105844399: Constants.TENNIS_ID,
        973767643: Constants.BASEBALL,
        1025083526: Constants.AMERICAN_FOOTBALL,
        103842744: Constants.HOCKEY,
      };
      for (const sport of root) {
        if (sports[sport.NodeId]) {
          const sportUrl = this.configuration.api_url + 'home/GetCountries?parentid=' + sport.NodeId + '&languageCode=es-co';
          const response = await this.apiService.get(sportUrl);
          this.logger.debug(sportUrl, 'Sport url');
          if (response && response.data) {
            const countries = response.data as CodereModel.CountryInterface[];
            for (const country of countries) {
              for (const league of country.Leagues) {
                const l: LeagueModel = {
                  bookmarker_id: this.configuration._id,
                  configurations: undefined,
                  provider_country: country.Name,
                  provider_id: league.NodeId,
                  provider_name: league.Name,
                  sport_id: sports[sport.NodeId],
                };
                await this.bdService.saveLeague(l);
              }
            }

          }

        }
      }
    }

  }
}
