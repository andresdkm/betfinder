import { EventModel } from '../models/event.model';
import { schema } from '../shemas/schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventInterface } from '../interfaces/event.interface';
import { BaseRepository } from './base.repository';
import { MatchInterface } from '../interfaces/match.interface';
import { MatchModel } from '../models/match.model';
import 'moment-timezone';
import * as moment from 'moment';

@Injectable()
export class MatchRepository extends BaseRepository<MatchInterface, MatchModel> {

  constructor(@InjectModel(schema.matches) private readonly modelDb: Model<MatchInterface>) {
    super(modelDb);
  }

  async getByIndexed(): Promise<MatchInterface[]> {
    const now = new Date(moment().tz('America/Bogota').toISOString());
    return await this.model.find(
      {
        start_at: { $gt: now },
      },
    ).sort({ updated_at: 1 }).limit(15).exec();
  }

}
