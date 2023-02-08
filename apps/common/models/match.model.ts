import { RelationModel } from './relation.model';

export interface MatchModel {
  country_id: string;
  name: string;
  name_en: string;
  relations: RelationModel[];
  review: boolean;
  sport_id: string;
  start_at: Date;
  created_at: Date;
  updated_at: Date;
}
