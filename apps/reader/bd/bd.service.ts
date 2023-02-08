import { Injectable } from '@nestjs/common';
import { EventModel } from '../../common/models/event.model';
import { EventRepository } from '../../common/repositories/event.repository';
import { Util } from '../../common/util';
import { LeagueModel } from '../../common/models/league.model';
import { LeagueRepository } from '../../common/repositories/league.repository';

@Injectable()
export class BdService {

  constructor(private eventRepository: EventRepository,
              private leagueRepository: LeagueRepository) {
  }

  public async saveEvent(event: EventModel) {
    const item = await this.eventRepository.findOne(
      {
        provider_id: event.provider_id,
        bookmarker_id: event.bookmarker_id,
      },
    );
    if (item) {
      item.start_at = event.start_at;
      item.updated_at = Util.getDate();
      item.name = event.name;
      item.name_en = event.name_en;
      await this.eventRepository.save(item);
    } else {
      event.indexed = false;
      event.created_at = Util.getDate();
      event.updated_at = Util.getDate();
      await this.eventRepository.create(event);
    }
  }

  public async saveLeague(league: LeagueModel) {
    const item = await this.leagueRepository.findOne(
      {
        provider_id: league.provider_id,
        bookmarker_id: league.bookmarker_id,
        sport_id: league.sport_id,
      },
    );
    if (item) {
      item.provider_name = league.provider_name;
      item.provider_country = league.provider_country;
      item.sport_id = league.sport_id;
      item.configurations = league.configurations;
      item.updated_at = Util.getDate();
      await this.leagueRepository.save(item);
    } else {
      league.created_at = Util.getDate();
      league.updated_at = Util.getDate();
      await this.leagueRepository.create(league);
    }
  }
}
