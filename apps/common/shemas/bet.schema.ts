import * as mongoose from 'mongoose';

export const BetSchema = new mongoose.Schema({
  event1: String,
  event2: String,
  event3: String,
  odd1: {
    name: String,
    value: String,
    provider_name: String,
  },
  odd2: {
    name: String,
    value: String,
    provider_name: String,
  },
  odd3: {
    name: String,
    value: String,
    provider_name: String,
  },
  stories: [{
    runner: String,
    created_at: { type: Date, default: Date.now },
    percent: Number,
  }],
  percent: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  likes: Number,
});
