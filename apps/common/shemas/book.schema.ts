import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  name: String,
  url: String,
  api_url: String,
  events_url: String,
  leagues_url: String,
  ajax: Boolean,
  live: Boolean,
  enable: Boolean,
  hide: Boolean,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
