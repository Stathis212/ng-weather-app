import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';

import * as fromCity from './_store';
import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import { CityCurrentWeatherComponent } from './current-weather/current-weather.component';
import { CityFiveDayForecastComponent } from './five-day-forecast/five-day-forecast.component';

@NgModule({
  declarations: [
    CityComponent,
    CityCurrentWeatherComponent,
    CityFiveDayForecastComponent
  ],
  imports: [
    CityRoutingModule,
    SharedModule,
    StoreModule.forFeature('cityWeather', fromCity.reducer),
    EffectsModule.forFeature(fromCity.effects)
  ],
  exports: [],
  providers: []
})
export class CityModule {
}
