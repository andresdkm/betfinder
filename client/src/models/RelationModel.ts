import {EventModel} from './EventModel';

export interface RelationModel {
  event_id: string;
  provider_id: number | number | string;
  bookmarker_id: string;
  score: number;
  _id: string;
  event?: EventModel;
}
