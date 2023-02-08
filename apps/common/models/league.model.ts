import { OddModel } from './odd.model';
import { StoryModel } from './story.model';

export interface LeagueModel {
  bookmarker_id: string;
  configurations: any;
  provider_country: string;
  provider_id: string;
  provider_name: string;
  sport_id: string;
  created_at?: Date;
  updated_at?: Date;
}
