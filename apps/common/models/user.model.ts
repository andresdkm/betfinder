import { FirebaseModel } from './firebase.model';

export interface UserModel {
  _id?: string;
  provider_id: string;
  token_key: string;
  email: string;
  image: string;
  created_at?: Date;
  updated_at?: Date;
}
