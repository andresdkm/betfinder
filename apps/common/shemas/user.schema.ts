import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  provider_id: String,
  email: String,
  image: String,
  token_key: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
