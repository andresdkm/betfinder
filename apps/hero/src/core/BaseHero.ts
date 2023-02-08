import { BookModel } from '../../../common/models/book.model';
import { EventModel } from '../../../common/models/event.model';
import { ApiService } from '../../../common/services/api.service';
import { Logger } from '@nestjs/common';
import { ApiHelper } from './ApiHelper';
import { ConfigService } from '../../../common/services/config.service';

export abstract class BaseHero {

  configuration: BookModel;
  protected apiService: ApiHelper;
  protected logger: Logger;
  protected name: string;

  protected constructor(name: string, configService: ConfigService, logger: Logger) {
    this.name = name;
    this.apiService = new ApiHelper(configService, logger);
    this.logger = logger;
  }

  async loadConfiguration() {
    this.configuration = await this.apiService.getBook(this.name);
    if (this.configuration.hide) {
      await this.apiService.hideIp(this.configuration.api_url);
    }
    const ip = await this.apiService.getIp();
    this.logger.debug(ip, 'The hero using the next ip ');
  }

  async abstract processEvent(event: EventModel);
}
