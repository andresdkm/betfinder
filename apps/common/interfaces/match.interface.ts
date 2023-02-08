import { Document } from 'mongoose';

export interface MatchInterface extends Document {
  country_id: string;
  name: string;
  name_en: string;
  relations: [];
  review: boolean;
  sport_id: string;
  start_at: Date;
  created_at: Date;
  updated_at: Date;
}
