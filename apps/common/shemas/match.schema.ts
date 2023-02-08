import * as mongoose from 'mongoose';

export const MatchSchema = new mongoose.Schema({
  country_id: String,
  name: String,
  name_en: String,
  sport_id: String,
  relations: [{
    bookmarker_id: String,
    event_id: String,
    provider_id: String,
    score: Number,
    name: String,
  }],
  review: Boolean,
  start_at: Date,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
