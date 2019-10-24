
import * as fromCityActions from './city.actions';
import { CityWeatherState } from './city.state';

export const initialState: CityWeatherState = {
  currentWeather: null,
  hourlyForecast: null,
  fiveDayForecast: null
};

export function reducer(state: CityWeatherState = initialState, action: fromCityActions.CityActions): CityWeatherState {

  switch (action.type) {
    case fromCityActions.LOAD_CITY_CURRENT_WEATHER_SUCCESS: {
      return {
        ...state,
        currentWeather: action.payload
      };
    }
    case fromCityActions.LOAD_CITY_FIVE_DAY_FORECAST_SUCCESS: {
      return {
        ...state,
        fiveDayForecast: action.payload
      };
    }
  }

  return state;

}
