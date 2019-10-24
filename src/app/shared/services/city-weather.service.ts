import { Injectable } from '@angular/core';
import { HttpService } from '@services/http.service';
import { CityWeatherModel, ForecastModel } from '@shared/models';
import { QueryParam } from '@shared/models/query-param.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CityWeatherService {

  private currentWeather = 'weather/';
  private fiveDayWeather = 'forecast/';
  private hourlyForecast = 'forecast/hourly';

  constructor(private httpService: HttpService) {}

  public getCurrentWeather(cityName: string, queryParams: Array<QueryParam>): Observable<CityWeatherModel> {
    return this.httpService.fetch(this.currentWeather + `?q=${cityName}`, queryParams).pipe(
      map(response => (response as CityWeatherModel))
    );
  }

  public getFiveDayForecast(cityName: string, queryParams: Array<QueryParam>): Observable<ForecastModel> {
    return this.httpService.fetch(this.fiveDayWeather + `?q=${cityName}`, queryParams).pipe(
      map(response => (response as ForecastModel))
    );
  }

  public getHourlyForecast(): Observable<ForecastModel> {
    return this.httpService.fetch(this.hourlyForecast).pipe(
      map(response => (response as ForecastModel))
    );
  }
}

