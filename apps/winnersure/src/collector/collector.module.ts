import { Logger, Module } from '@nestjs/common';
import { CollectorController } from './collector.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { COLLECTOR_SERVICE } from './collector.constants';
import { PubsubManager } from 'redis-messaging-manager';
import { response } from 'express';
import { CommonModule } from '../../../common/common.module';
import { EventRepository } from '../../../common/repositories/event.repository';
import { Connection } from 'mongoose';
import { MongoClient } from 'mongodb';
import { BetRepository } from '../../../common/repositories/bet.repository';
import { CollectModel } from '../../../common/models/collect.model';
import { OddModel } from '../../../common/models/odd.model';
import { StoryModel } from '../../../common/models/story.model';
import { ConfigService } from '../../../common/services/config.service';
import { RoomService } from '../../../common/services/room/room.service';
import { Util } from '../../../common/util';
import { BetModel } from '../../../common/models/bet.model';

@Module({
  controllers: [],
  imports: [
    CommonModule,
  ],
  providers: [
    Logger,
  ],
})
export class CollectorModule {

  private pub: any;

  constructor(private readonly logger: Logger,
              private betRepository: BetRepository,
              private config: ConfigService,
              private roomService: RoomService) {
    this.pub = new PubsubManager({
      port: config.get('REDIS_PORT'),
      host: config.get('REDIS_HOST'),
      password: config.get('REDIS_PASSWORD'),
    });
    this.subscribe();
    this.remove();
  }

  remove() {
    setInterval(() => {
      this.removeBets();
    }, 300000);
  }

  async removeBets() {
    const bets = await this.betRepository.find({
      updated_at: {
        $lt: Util.getMoment().subtract(60, 'minutes').toDate(),
      },
    });
    for (const bet of bets) {
      await this.betRepository.removeById(bet._id);
      await this.roomService.notify('remove_bet', bet._id);
    }
  }

  subscribe() {
    this.pub.consume(this.config.get('BETS_TOPIC'))
      .subscribe(data => {
        this.saveBet(JSON.parse(data) as CollectModel);
      });
  }

  async saveBet(collectModel: CollectModel) {
    if (!collectModel.event3) {
      const bet = await this.betRepository.findOne({
        'event1': collectModel.event1,
        'event2': collectModel.event2,
        'odd1.name': collectModel.bet1.name,
        'odd2.name': collectModel.bet2.name,
      });
      if (!bet) {
        const betModel: BetModel = {
          odd1: {
            name: collectModel.bet1.name,
            value: collectModel.bet1.value,
            provider_name: collectModel.bet1.provider_name,
          },
          odd2: {
            name: collectModel.bet2.name,
            value: collectModel.bet2.value,
            provider_name: collectModel.bet2.provider_name,
          },
          event1: collectModel.event1,
          event2: collectModel.event2,
          percent: collectModel.percent,
          updated_at: undefined,
          created_at: undefined,
          stories: [
            {
              runner: collectModel.runner,
              percent: collectModel.percent,
            },
          ],
        };
        const bet = await this.betRepository.create(betModel);
        await this.roomService.notify('update_bet', bet);
      } else {
        const story: StoryModel = {
          runner: collectModel.runner,
          percent: collectModel.percent,
        };
        bet.stories.push(story);
        bet.percent = collectModel.percent;
        await this.betRepository.save(bet);
        await this.roomService.notify('update_bet', bet);
      }

    } else {
      const bet = await this.betRepository.findOne({
        'event1': collectModel.event1,
        'event2': collectModel.event2,
        'event3': collectModel.event3,
        'odd1.name': collectModel.bet1.name,
        'odd2.name': collectModel.bet2.name,
        'odd3.name': collectModel.bet3.name,
      });
      if (!bet) {
        const betModel: BetModel = {
          odd1: {
            name: collectModel.bet1.name,
            value: collectModel.bet1.value,
            provider_name: collectModel.bet1.provider_name,
          },
          odd2: {
            name: collectModel.bet2.name,
            value: collectModel.bet2.value,
            provider_name: collectModel.bet2.provider_name,
          },
          odd3: {
            name: collectModel.bet3.name,
            value: collectModel.bet3.value,
            provider_name: collectModel.bet3.provider_name,
          },
          event1: collectModel.event1,
          event2: collectModel.event2,
          event3: collectModel.event3,
          percent: collectModel.percent,
          updated_at: undefined,
          created_at: undefined,
          stories: [
            {
              runner: collectModel.runner,
              percent: collectModel.percent,
            },
          ],
        };
        const bet = await this.betRepository.create(betModel);
        await this.roomService.notify('update_bet', bet);
      } else {
        const story: StoryModel = {
          runner: collectModel.runner,
          percent: collectModel.percent,
        };
        bet.stories.push(story);
        bet.percent = collectModel.percent;
        await this.betRepository.save(bet);
        await this.roomService.notify('update_bet', bet);
      }
    }

  }

}
