import { createFeatureSelector } from '@ngrx/store';
import { CityWeatherModel, ForecastModel } from '@shared/models';

export interface CityWeatherState {
  currentWeather: CityWeatherModel;
  hourlyForecast: ForecastModel;
  fiveDayForecast: ForecastModel;
}

export const getCityWeatherState =  createFeatureSelector<CityWeatherState>('cityWeather');
