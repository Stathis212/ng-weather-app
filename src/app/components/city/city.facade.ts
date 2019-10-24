import { Injectable } from '@angular/core';
import * as fromCoreSelectors from '@core/store/core.selectors';
import * as fromCoreState from '@core/store/core.state';
import { Store } from '@ngrx/store';

import * as fromCityActions from './_store/city.actions';
import * as fromCitySelectors from './_store/city.selectors';

@Injectable()
export class CityFacade {

  selectedCity$ = this.store.select(fromCoreSelectors.getSelectedCity);
  selectedCountry$ = this.store.select(fromCoreSelectors.getSelectedCountry);

  currentWeather$ = this.store.select(fromCitySelectors.getCityCurrentWeather);
  fiveDayForecast$ = this.store.select(fromCitySelectors.getCityFiveDayForecast);

  constructor(private store: Store<fromCoreState.CoreState>) {}

  public getCityWeather(cityName: string): void {

    this.store.dispatch(new fromCityActions.LoadCityCurrentWeather(cityName));
  }

  public getCityFiveDayForesecast(cityName: string): void {

    this.store.dispatch(new fromCityActions.LoadCityFiveDayForecast(cityName));
  }

  public clearCityData(): void {

    this.store.dispatch(new fromCityActions.ClearAllCityData());
  }

}
