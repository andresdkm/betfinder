export interface BookModel {
  _id?: string;
  name: string;
  url: string;
  api_url?: string;
  events_url: string;
  leagues_url: string;
  ajax: boolean;
  live: boolean;
  enable: boolean;
  hide: boolean;
  created_at: Date;
  updated_at: Date;
}
