import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { InjectModel } from '@nestjs/mongoose';
import { schema } from '../shemas/schema';
import { Model, Types } from 'mongoose';
import { BetInterface } from '../interfaces/bet.interface';
import { BetModel } from '../models/bet.model';
import { ObjectId } from 'mongodb';

@Injectable()
export class BetRepository extends BaseRepository<BetInterface, BetModel> {

  constructor(@InjectModel(schema.bets) private readonly modelDb: Model<BetInterface>) {
    super(modelDb);
  }

  async getBetById(id: string): Promise<any> {
    return this.modelDb.aggregate(
      [
        { '$addFields': { 'event1_id': { '$toObjectId': '$event1' } } },
        { '$addFields': { 'event2_id': { '$toObjectId': '$event2' } } },
        { '$addFields': { 'event3_id': { '$toObjectId': '$event3' } } },
        {
          $lookup:
            {
              from: 'events',
              let: { order_item: '$event1_id' },
              pipeline: [
                {
                  $match:
                    {
                      $expr:
                        {
                          $eq: ['$_id', '$$order_item'],
                        },
                    },
                },
                {
                  $project: {
                    name: 1,
                    bookmarker_id: 1,
                    sport_id: 1,
                    provider_id: 1,
                    bookmarker_league_id: 1,
                    league: 1,
                    start_at: 1,
                  },
                },
              ],
              as: 'event1_details',

            },
        },
        {
          $lookup:
            {
              from: 'events',
              let: { order_item: '$event2_id' },
              pipeline: [
                {
                  $match:
                    {
                      $expr:
                        {
                          $eq: ['$_id', '$$order_item'],
                        },
                    },
                },
                {
                  $project: {
                    name: 1,
                    bookmarker_id: 1,
                    sport_id: 1,
                    provider_id: 1,
                    bookmarker_league_id: 1,
                    league: 1,
                    start_at: 1,
                  },
                },
              ],
              as: 'event2_details',
            },
        },
        {
          $lookup:
            {
              from: 'events',
              let: { order_item: '$event3_id' },
              pipeline: [
                {
                  $match:
                    {
                      $expr:
                        {
                          $eq: ['$_id', '$$order_item'],
                        },
                    },
                },
                {
                  $project: {
                    name: 1,
                    bookmarker_id: 1,
                    sport_id: 1,
                    provider_id: 1,
                    bookmarker_league_id: 1,
                    league: 1,
                    start_at: 1,
                  },
                },
              ],
              as: 'event3_details',
            },
        },
        {
          $unwind: {
            path: '$event1_details',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$event2_details',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$event3_details',
            preserveNullAndEmptyArrays: true,
          },
        },
        { '$addFields': { 'book1_id': { '$toObjectId': '$event1_details.bookmarker_id' } } },
        { '$addFields': { 'book2_id': { '$toObjectId': '$event2_details.bookmarker_id' } } },
        { '$addFields': { 'book3_id': { '$toObjectId': '$event3_details.bookmarker_id' } } },
        { '$addFields': { 'sport_id': { '$toObjectId': '$event1_details.sport_id' } } },
        { '$addFields': { 'league1_id': { '$toObjectId': '$event1_details.bookmarker_league_id' } } },
        { '$addFields': { 'league2_id': { '$toObjectId': '$event2_details.bookmarker_league_id' } } },
        { '$addFields': { 'league3_id': { '$toObjectId': '$event3_details.bookmarker_league_id' } } },
        {
          $lookup:
            {
              from: 'bookmarkers',
              let: { order_item: '$book1_id' },
              pipeline: [
                {
                  $match:
                    {
                      $expr:
                        {
                          $eq: ['$_id', '$$order_item'],
                        },
                    },
                },
                { $project: { name: 1 } },
              ],
              as: 'event1_details.book',
            },
        },
        {
          $lookup:
            {
              from: 'bookmarkers',
              let: { order_item: '$book2_id' },
              pipeline: [
                {
                  $match:
                    {
                      $expr:
                        {
                          $eq: ['$_id', '$$order_item'],
                        },
                    },
                },
                { $project: { name: 1 } },
              ],
              as: 'event2_details.book',
            },
        },
        {
          $lookup:
            {
              from: 'bookmarkers',
              let: { order_item: '$book3_id' },
              pipeline: [
                {
                  $match:
                    {
                      $expr:
                        {
                          $eq: ['$_id', '$$order_item'],
                        },
                    },
                },
                { $project: { name: 1 } },
              ],
              as: 'event3_details.book',
            },
        },
        {
          $lookup:
            {
              from: 'sports',
              localField: 'sport_id',
              foreignField: '_id',
              as: 'sport',
            },
        },
        {
          $lookup:
            {
              from: 'bookmarker_leagues',
              localField: 'league1_id',
              foreignField: '_id',
              as: 'league1',
            },
        },
        {
          $lookup:
            {
              from: 'bookmarker_leagues',
              localField: 'league2_id',
              foreignField: '_id',
              as: 'league2',
            },
        },
        {
          $lookup:
            {
              from: 'bookmarker_leagues',
              localField: 'league3_id',
              foreignField: '_id',
              as: 'league3',
            },
        },
        {
          $unwind: {
            path: '$event1_details.book',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$event2_details.book',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$event3_details.book',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$sport',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$league1',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$league2',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$league3',
            preserveNullAndEmptyArrays: true,
          },
        },
        { $match: { _id: new ObjectId(id) } },
        {
          $project: {
            percent: 1,
            updated_at: 1,
            event1_details: 1,
            event2_details: 1,
            event3_details: 1,
            sport: 1,
            league1: 1,
            league2: 1,
            league3: 1,
            odd1: 1,
            odd2: 1,
            odd3: 1,
            likes: 1,
          },
        },
      ],
    )
      .limit(1);
  }

  public async getBets(): Promise<any> {
    return this.modelDb.aggregate([
        { '$addFields': { 'event1_id': { '$toObjectId': '$event1' } } },
        { '$addFields': { 'event2_id': { '$toObjectId': '$event2' } } },
        { '$addFields': { 'event3_id': { '$toObjectId': '$event3' } } },
        {
          $lookup:
            {
              from: 'events',
              let: { order_item: '$event1_id' },
              pipeline: [
                {
                  $match:
                    {
                      $expr:
                        {
                          $eq: ['$_id', '$$order_item'],
                        },
                    },
                },
                {
                  $project: {
                    name: 1,
                    bookmarker_id: 1,
                    sport_id: 1,
                    provider_id: 1,
                    bookmarker_league_id: 1,
                    league: 1,
                    start_at: 1,
                  },
                },
              ],
              as: 'event1_details',

            },
        },
        {
          $lookup:
            {
              from: 'events',
              let: { order_item: '$event2_id' },
              pipeline: [
                {
                  $match:
                    {
                      $expr:
                        {
                          $eq: ['$_id', '$$order_item'],
                        },
                    },
                },
                {
                  $project: {
                    name: 1,
                    bookmarker_id: 1,
                    sport_id: 1,
                    provider_id: 1,
                    bookmarker_league_id: 1,
                    league: 1,
                    start_at: 1,
                  },
                },
              ],
              as: 'event2_details',
            },
        },
        {
          $lookup:
            {
              from: 'events',
              let: { order_item: '$event3_id' },
              pipeline: [
                {
                  $match:
                    {
                      $expr:
                        {
                          $eq: ['$_id', '$$order_item'],
                        },
                    },
                },
                {
                  $project: {
                    name: 1,
                    bookmarker_id: 1,
                    sport_id: 1,
                    provider_id: 1,
                    bookmarker_league_id: 1,
                    league: 1,
                    start_at: 1,
                  },
                },
              ],
              as: 'event3_details',
            },
        },
        {
          $unwind: {
            path: '$event1_details',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$event2_details',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$event3_details',
            preserveNullAndEmptyArrays: true,
          },
        },
        { '$addFields': { 'book1_id': { '$toObjectId': '$event1_details.bookmarker_id' } } },
        { '$addFields': { 'book2_id': { '$toObjectId': '$event2_details.bookmarker_id' } } },
        { '$addFields': { 'book3_id': { '$toObjectId': '$event3_details.bookmarker_id' } } },
        { '$addFields': { 'sport_id': { '$toObjectId': '$event1_details.sport_id' } } },
        { '$addFields': { 'league1_id': { '$toObjectId': '$event1_details.bookmarker_league_id' } } },
        { '$addFields': { 'league2_id': { '$toObjectId': '$event2_details.bookmarker_league_id' } } },
        { '$addFields': { 'league3_id': { '$toObjectId': '$event3_details.bookmarker_league_id' } } },
        {
          $lookup:
            {
              from: 'bookmarkers',
              let: { order_item: '$book1_id' },
              pipeline: [
                {
                  $match:
                    {
                      $expr:
                        {
                          $eq: ['$_id', '$$order_item'],
                        },
                    },
                },
                { $project: { name: 1 } },
              ],
              as: 'event1_details.book',
            },
        },
        {
          $lookup:
            {
              from: 'bookmarkers',
              let: { order_item: '$book2_id' },
              pipeline: [
                {
                  $match:
                    {
                      $expr:
                        {
                          $eq: ['$_id', '$$order_item'],
                        },
                    },
                },
                { $project: { name: 1 } },
              ],
              as: 'event2_details.book',
            },
        },
        {
          $lookup:
            {
              from: 'bookmarkers',
              let: { order_item: '$book3_id' },
              pipeline: [
                {
                  $match:
                    {
                      $expr:
                        {
                          $eq: ['$_id', '$$order_item'],
                        },
                    },
                },
                { $project: { name: 1 } },
              ],
              as: 'event3_details.book',
            },
        },
        {
          $lookup:
            {
              from: 'sports',
              localField: 'sport_id',
              foreignField: '_id',
              as: 'sport',
            },
        },
        {
          $lookup:
            {
              from: 'bookmarker_leagues',
              localField: 'league1_id',
              foreignField: '_id',
              as: 'league1',
            },
        },
        {
          $lookup:
            {
              from: 'bookmarker_leagues',
              localField: 'league2_id',
              foreignField: '_id',
              as: 'league2',
            },
        },
        {
          $lookup:
            {
              from: 'bookmarker_leagues',
              localField: 'league3_id',
              foreignField: '_id',
              as: 'league3',
            },
        },
        {
          $unwind: {
            path: '$event1_details.book',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$event2_details.book',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$event3_details.book',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$sport',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$league1',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$league2',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: '$league3',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            percent: 1,
            updated_at: 1,
            event1_details: 1,
            event2_details: 1,
            event3_details: 1,
            sport: 1,
            league1: 1,
            league2: 1,
            league3: 1,
            odd1: 1,
            odd2: 1,
            odd3: 1,
            likes: 1,
          },
        },
      ],
    )
      .sort({ _id: -1 })
      .limit(1000);
  }

}
