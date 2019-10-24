import { Clouds, Main, Sys, Weather, Wind } from './';

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  sys: Sys;
  dt_txt: string;
  rain: any;
  snow?: any;
}
