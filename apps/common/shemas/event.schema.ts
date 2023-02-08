import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
  bookmarker_id: String,
  provider_country: String,
  country_id: String,
  home: String,
  away: String,
  name: String,
  league: String,
  provider_id: String,
  sport_id: String,
  home_en: String,
  away_en: String,
  name_en: String,
  indexed: Boolean,
  start_at: Date,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
