import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { InjectModel } from '@nestjs/mongoose';
import { schema } from '../shemas/schema';
import { Model } from 'mongoose';
import { BetInterface } from '../interfaces/bet.interface';
import { BetModel } from '../models/bet.model';
import { UserModel } from '../models/user.model';
import { UserInterface } from '../interfaces/user.interface';

@Injectable()
export class UserRepository extends BaseRepository<UserInterface, UserModel> {

  constructor(@InjectModel(schema.users) private readonly modelDb: Model<UserInterface>) {
    super(modelDb);
  }

  public async findOrCreate(providerId: string, email: string, image: string): Promise<UserModel> {
    let userLocal: UserModel = await this.findOne({
      provider_id: providerId,
    });
    if (userLocal) {
      return userLocal;
    }
    userLocal = {
      provider_id: providerId,
      email,
      image,
      token_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    };
    return await this.create(userLocal);
  }
}
