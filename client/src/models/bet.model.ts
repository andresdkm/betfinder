import { SportModel } from './sport.model';
import { DetailModel } from './detail.model';
import { OddModel } from './odd.model';

export class BetModel {
  _id: string;
  percent: number;
  updated_at: string;
  event1_details: DetailModel;
  event2_details: DetailModel;
  event3_details: DetailModel;
  odd1: OddModel;
  odd2: OddModel;
  odd3?: OddModel;
  sport: SportModel;
  likes: number;
}
