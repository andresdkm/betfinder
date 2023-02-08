import { BookModel } from './book.model';

export class DetailModel {
  _id: string;
  bookmarker_id: string;
  bookmarker_league_id: string;
  league: string;
  name: string;
  provider_id: number;
  sport_id: string;
  start_at: string;
  book: BookModel;
}
