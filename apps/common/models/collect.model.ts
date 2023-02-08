import { OddModel } from './odd.model';

export interface CollectModel {
  bet1: OddModel;
  bet2: OddModel;
  bet3?: OddModel;
  event1: string;
  event2: string;
  event3?: string;
  percent: number;
  runner: string;
}
