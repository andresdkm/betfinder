import {RelationModel} from './RelationModel';
import {CountryModel} from './CountryModel';

export class MatchModel {
  _id: string;
  name: string;
  name_en: string;
  country_id: string;
  start_at: string;
  review: boolean;
  sport_id: string;
  points: number;
  keywords: string[];
  updated_at: string;
  created_at: string;
  relations: RelationModel[];
  indexed_at?: string;
  score: number;
  country: CountryModel;
}
