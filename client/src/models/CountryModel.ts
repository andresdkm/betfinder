export interface CountryModel {
  _id: string;
  name: string;
  provider_id: number;
  iso_three: string;
  translates: Array<string>;
  updated_at: string;
  created_at: string;
}
