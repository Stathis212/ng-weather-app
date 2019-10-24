import { Action } from '@ngrx/store';
import { CityWeatherModel, ForecastModel } from '@shared/models';

/* ==========================================================================
  TYPES
========================================================================== */

export const LOAD_CITY_CURRENT_WEATHER = '[CITY] Load city current weather';
export const LOAD_CITY_CURRENT_WEATHER_SUCCESS = '[CITY] Load city current weather success';
export const LOAD_CITY_CURRENT_WEATHER_FAILURE = '[CITY] Load city current weather failure';

export const LOAD_CITY_FIVE_DAY_FORECAST = '[CITY] Load city five day forecast';
export const LOAD_CITY_FIVE_DAY_FORECAST_SUCCESS = '[CITY] Load city five day forecast success';
export const LOAD_CITY_FIVE_DAY_FORECAST_FAILURE = '[CITY] Load city five day forecast failure';

export const CLEAR_ALL_CITY_DATA = '[CITY] Clear all city data';

/* ==========================================================================
  CLASSES
========================================================================== */

export class LoadCityCurrentWeather implements Action {

  readonly type = LOAD_CITY_CURRENT_WEATHER;

  constructor(public payload: string) {}
}

export class LoadCityCurrentWeatherSuccess implements Action {

  readonly type = LOAD_CITY_CURRENT_WEATHER_SUCCESS;

  constructor(public payload: CityWeatherModel) {}
}

export class LoadCityCurrentWeatherFailure implements Action {

  readonly type = LOAD_CITY_CURRENT_WEATHER_FAILURE;
}

export class LoadCityFiveDayForecast implements Action {

  readonly type = LOAD_CITY_FIVE_DAY_FORECAST;

  constructor(public payload: string) {}
}

export class LoadCityFiveDayForecastSuccess implements Action {

  readonly type = LOAD_CITY_FIVE_DAY_FORECAST_SUCCESS;

  constructor(public payload: ForecastModel) {}
}

export class LoadCityFiveDayForecastFailure implements Action {

  readonly type = LOAD_CITY_FIVE_DAY_FORECAST_FAILURE;
}

export class ClearAllCityData implements Action {

  readonly type = CLEAR_ALL_CITY_DATA;
}

/* ==========================================================================
  ACTIONS
========================================================================== */

export type CityActions = LoadCityCurrentWeather |
                          LoadCityCurrentWeatherSuccess |
                          LoadCityCurrentWeatherFailure |
                          LoadCityFiveDayForecast |
                          LoadCityFiveDayForecastSuccess |
                          LoadCityFiveDayForecastFailure |
                          ClearAllCityData;
