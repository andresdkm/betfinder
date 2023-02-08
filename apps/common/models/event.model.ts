import { OddModel } from './odd.model';

export interface EventModel {
  _id?: string;
  bookmarker_id: string;
  home: string;
  away: string;
  name: string;
  home_en?: string;
  away_en?: string;
  name_en?: string;
  league: string;
  country_id?: string;
  provider_country: string;
  provider_id: string;
  start_at: Date;
  sport_id: string;
  updated_at?: Date;
  created_at?: Date;
  indexed?: boolean;
  odds?: OddModel[];
  event_id?: string;
}
