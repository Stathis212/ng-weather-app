import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { QueryParam } from '@shared/models/query-param.model';
import { CityWeatherService } from '@shared/services/city-weather.service';

import * as fromCity from './city.actions';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class CityEffects {

  @Effect()
  loadCityCurrentWeather$ = this.actions$.pipe(
    ofType(fromCity.LOAD_CITY_CURRENT_WEATHER),
    map((action: any) => action.payload),
    switchMap((cityName: string) => {
      const queryParams: QueryParam[] = [];
      queryParams.push(new QueryParam('units', 'metric'));
      queryParams.push(new QueryParam('appid', 'e9fc171ebf8d729025d63a594c267f92'));
      return this.cityWeatherService.getCurrentWeather(cityName, queryParams).pipe(
        map(currentWeather => new fromCity.LoadCityCurrentWeatherSuccess(currentWeather)),
        catchError(error => {
          return of(new fromCity.LoadCityCurrentWeatherFailure());
        })
      );
    })
  );

  @Effect()
  loadCityFiveDayForecast$ = this.actions$.pipe(
    ofType(fromCity.LOAD_CITY_FIVE_DAY_FORECAST),
    map((action: any) => action.payload),
    switchMap((cityName: string) => {
      const queryParams: QueryParam[] = [];
      queryParams.push(new QueryParam('appid', 'e9fc171ebf8d729025d63a594c267f92'));
      return this.cityWeatherService.getFiveDayForecast(cityName, queryParams).pipe(
        map(forecast => new fromCity.LoadCityFiveDayForecastSuccess(forecast)),
        catchError(error => {
          return of(new fromCity.LoadCityFiveDayForecastFailure());
        })
      );
    })
  );

  constructor( private actions$: Actions,
               private cityWeatherService: CityWeatherService ) { }

}
