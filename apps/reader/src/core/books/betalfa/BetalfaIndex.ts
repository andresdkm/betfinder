import Constants from '../../app/Constants';
import { BaseBookIndex } from '../../app/BaseBookIndex';
import { BdService } from '../../../../bd/bd.service';
import { ApiService } from '../../../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import { EventModel } from '../../../../../common/models/event.model';
import { Util } from '../../../../../common/util';
import { LeagueModel } from '../../../../../common/models/league.model';
// @ts-ignore
import RootObject = BetalfaLeagueModel.RootObject;

export class BetalfaIndex extends BaseBookIndex {

  constructor(bdService: BdService, apiService: ApiService, logger: Logger) {
    super(Constants.BETALFA_ID, bdService, apiService, logger);
    this.bdService = bdService;
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

  private async getData(data: any) {
    data.Culture = 'en';
    let responseData: BetalfaEventModel.RootObject;
    const url = this.configuration.api_url + 'Fixtures/GetGroupedMatchesByTournament';
    this.logger.debug(url, 'Finding events in league');
    const res = await this.apiService.post(url, data);
    responseData = res.data[0] as BetalfaEventModel.RootObject;
    if (responseData && responseData.t) {
      for (const t of responseData.t) {
        for (const m of t.m) {
          const league = this.findInLeagues(t.id.toString());
          const countryName = escape(league.provider_country);
          const eventOpenBet: EventModel = {
            away: unescape(escape(m.at.replace('1.', '').trim())),
            bookmarker_id: this.configuration._id,
            provider_country: unescape(countryName.replace('1.', '').trim()),
            home: unescape(escape(m.ht.replace('1.', '').trim())),
            league: unescape(escape(t.n.replace('1.', '').trim())),
            name: unescape(escape(m.ht.replace('1.', '').trim() + ' - ' + m.at.replace('1.', '').trim())),
            provider_id: m.mid.toString(),
            sport_id: league.sport_id,
            start_at: Util.getTimezone(m.d + ' ' + m.mt),
          };
          eventOpenBet.name_en = eventOpenBet.name;
          eventOpenBet.home_en = eventOpenBet.home;
          eventOpenBet.away_en = eventOpenBet.away;
          await this.bdService.saveEvent(eventOpenBet);
        }
      }
    }
  }

  private findInLeagues(providerId: string) {
    return this.leagues.find(l => l.provider_id === providerId);
  }

  async indexLeagues() {
    let response: RootObject;
    const hour = Util.getMoment();
    const time = hour.toDate().getTime();
    const postData = {
      FavoritesOnly: false,
      FromDate: { DatePart: hour.format('YYYY-MM-DD'), Hour: 0, Minute: 0, Second: 0 },
      ToDate: { DatePart: hour.add(1, 'year').format('YYYY-MM-DD'), Hour: 23, Minute: 59, Second: 59 },
      Token: '',
      Culture: 'en',
      TimeOffset: 300,
      OddFormat: '0',
      type: 0,
      provider: 0,
      ExternalUserID: null,
    };
    this.logger.debug(this.configuration.leagues_url, 'Index Leagues');
    const res = await this.apiService.post(this.configuration.leagues_url, postData);
    response = res.data as RootObject;
    for (const fixture of response.Fixtures) {
      let sportId = null;
      switch (fixture.ID) {
        case 1:
          sportId = Constants.SOCCER_ID;
          break;
        case 2:
          sportId = Constants.BASKETBALL;
          break;
        case 3:
          sportId = Constants.BASEBALL;
          break;
        case 4:
          sportId = Constants.HOCKEY;
          break;
        case 5:
          sportId = Constants.TENNIS_ID;
          break;
        case 14:
          sportId = Constants.AMERICAN_FOOTBALL;
          break;
        /* case 18:
             sportId = Constants.VOLLEYBALL;
             break;*/

      }
      if (sportId) {
        for (const item of fixture.Items) {
          for (const league of item.Items) {
            const data: LeagueModel = {
              provider_country: item.Name,
              provider_name: league.Name,
              provider_id: league.ID.toString(),
              sport_id: sportId,
              bookmarker_id: this.configuration._id,
              configurations: {
                IsFixtureGroup: league.IsFixtureGroup,
                GroupId: item.ID,
              },
            };
            await this.bdService.saveLeague(data);
          }
        }
      }

    }
  }

  protected async getLeague(league: LeagueModel): Promise<any> {
    const eventIds = {};
    const groupIds = {};
    const date = Util.getMoment();
    const toDate = Util.addYearMoment(1);
    const time = date.toDate().getTime();
    const sports = {};
    if (league.configurations && league.configurations.GroupId && !league.configurations.IsFixtureGroup) {
      if (!eventIds[league.configurations.GroupId]) {
        eventIds[league.configurations.GroupId] = [];
        switch (league.sport_id) {
          case  Constants.SOCCER_ID:
            sports[league.configurations.GroupId] = [1];
            break;
          case Constants.BASKETBALL:
            sports[league.configurations.GroupId] = [2];
            break;
          case Constants.BASEBALL:
            sports[league.configurations.GroupId] = [3];
            break;
          case Constants.HOCKEY:
            sports[league.configurations.GroupId] = [4];
            break;
          case Constants.TENNIS_ID:
            sports[league.configurations.GroupId] = [5];
            break;
          case Constants.AMERICAN_FOOTBALL:
            sports[league.configurations.GroupId] = [14];
            break;
          /*case Constants.VOLLEYBALL:
              sports[league.configurations.GroupId] = [18];
              break;*/

        }
      }
      eventIds[league.configurations.GroupId].push(league.provider_id.toString());
    } else if (league.configurations && league.configurations.GroupId && league.configurations.IsFixtureGroup) {
      if (!groupIds[league.configurations.GroupId]) {
        groupIds[league.configurations.GroupId] = [];
        switch (league.sport_id) {
          case  Constants.SOCCER_ID:
            sports[league.configurations.GroupId] = [1];
            break;
          case Constants.BASKETBALL:
            sports[league.configurations.GroupId] = [2];
            break;
          case Constants.BASEBALL:
            sports[league.configurations.GroupId] = [3];
            break;
          case Constants.HOCKEY:
            sports[league.configurations.GroupId] = [4];
            break;
          case Constants.TENNIS_ID:
            sports[league.configurations.GroupId] = [5];
            break;
          case Constants.AMERICAN_FOOTBALL:
            sports[league.configurations.GroupId] = [14];
            break;
          /* case Constants.VOLLEYBALL:
               sports[league.configurations.GroupId] = [18];
               break;*/

        }
      }
      groupIds[league.configurations.GroupId].push(league.provider_id.toString());
    }

    // tslint:disable-next-line:forin
    for (const key in eventIds) {
      const data = {
        SportData: sports[key],
        CategoryData: [],
        CategoryGroupData: [],
        TournamentData: eventIds[key],
        TournamentGroupData: [],
        Page: 1,
        Limit: 220,
        BetSlip: null,
        TimeFilter: '1',
        FromDate: { DatePart: date.format('YYYY-MM-DD'), Hour: 0, Minute: 0, Second: 0 },
        ToDate: {
          DatePart: toDate.format('YYYY-MM-DD'),
          Hour: 23,
          Minute: 59,
          Second: 59,
        },
        Token: '',
        Culture: 'es',
        SearchTerm: '',
        TimeOffset: 300,
        OddFormat: '0',
        type: 0,
        provider: 0,
        ExternalUserID: null,
      };
      await this.getData(data);
      await Util.delay();
    }

    // tslint:disable-next-line:forin
    for (const key in groupIds) {
      const data = {
        SportData: sports[key],
        CategoryData: [key.toString()],
        CategoryGroupData: [],
        TournamentData: [],
        TournamentGroupData: groupIds[key],
        Page: 1,
        Limit: 220,
        BetSlip: null,
        TimeFilter: '1',
        FromDate: { DatePart: date.format('YYYY-MM-DD'), Hour: 0, Minute: 0, Second: 0 },
        ToDate: {
          DatePart: toDate.format('YYYY-MM-DD'),
          Hour: 23,
          Minute: 59,
          Second: 59,
        },
        Token: '',
        Culture: 'es',
        SearchTerm: '',
        TimeOffset: 300,
        OddFormat: '0',
        type: 0,
        provider: 0,
        ExternalUserID: null,
      };
      await this.getData(data);
      await Util.delay();
    }
  }

}
