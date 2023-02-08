import { Document } from 'mongoose';

export interface LeagueInterface extends Document {
  bookmarker_id: string;
  configurations: any;
  provider_country: string;
  provider_id: string;
  provider_name: string;
  sport_id: string;
  created_at: Date;
  updated_at: Date;
}
