import { OddModel } from './odd.model';
import { StoryModel } from './story.model';

export interface BetModel {
  event1: string;
  event2: string;
  event3?: string;
  odd1: OddModel;
  odd2: OddModel;
  odd3?: OddModel;
  percent: number;
  created_at: Date;
  updated_at: Date;
  stories: StoryModel[];
  likes?: number;
}
