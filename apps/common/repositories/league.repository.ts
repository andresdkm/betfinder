import { schema } from '../shemas/schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { LeagueInterface } from '../interfaces/league.interface';
import { LeagueModel } from '../models/league.model';

@Injectable()
export class LeagueRepository extends BaseRepository<LeagueInterface, LeagueModel> {

  constructor(@InjectModel(schema.leagues) private readonly modelDb: Model<LeagueInterface>) {
    super(modelDb);
  }

}
