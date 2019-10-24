import { Coord } from './';

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
}
