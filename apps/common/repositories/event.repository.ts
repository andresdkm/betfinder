import { EventModel } from '../models/event.model';
import { schema } from '../shemas/schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventInterface } from '../interfaces/event.interface';
import { BaseRepository } from './base.repository';

@Injectable()
export class EventRepository extends BaseRepository<EventInterface, EventModel> {

  constructor(@InjectModel(schema.events) private readonly modelDb: Model<EventInterface>) {
    super(modelDb);
  }

}
