import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const LeagueSchema = new mongoose.Schema({
    bookmarker_id: String,
    configurations: Schema.Types.Mixed,
    provider_country: String,
    provider_id: String,
    provider_name: String,
    sport_id: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  })
;
