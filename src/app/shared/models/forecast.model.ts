import { City, List } from './';

export interface ForecastModel {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}
