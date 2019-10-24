import { createSelector } from '@ngrx/store';

import { CityWeatherState, getCityWeatherState } from './city.state';

/* ==========================================================================
  CORE SELECTORS
========================================================================== */

export const getCityCurrentWeather = createSelector(getCityWeatherState, (state: CityWeatherState) => state.currentWeather);

export const getCityFiveDayForecast = createSelector(getCityWeatherState, (state: CityWeatherState) => state.fiveDayForecast);

export const getCityHourlyForecast = createSelector(getCityWeatherState, (state: CityWeatherState) => state.hourlyForecast);
