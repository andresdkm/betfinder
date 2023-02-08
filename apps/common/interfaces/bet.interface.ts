import { Document } from 'mongoose';

export interface BetInterface extends Document {
  event1: string;
  event2: string;
  event3?: string;
  odd1: any;
  odd2: any;
  odd3?: any;
  percent: number;
  created_at: Date;
  updated_at: Date;
  stories: any[];
  likes: number;
}
