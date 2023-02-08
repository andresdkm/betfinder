import { Document } from 'mongoose';

export interface UserInterface extends Document {
  provider_id: string;
  token_key: string;
  email: string;
  image: string;
  created_at: Date;
  updated_at: Date;
}
