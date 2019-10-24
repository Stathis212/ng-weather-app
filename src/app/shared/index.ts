import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import {
  WeatherInfoItemComponent,
} from './components/weather-info-item/weather-info-item.component';
import { TemperatureConverterPipe } from './pipes/temperature-converter.pipe';
import { CityWeatherService } from './services/city-weather.service';

export const COMPONENTS = [
  WeatherIconComponent,
  WeatherInfoItemComponent
];

export const MATERIAL = [
  MatSelectModule,
  MatTabsModule,
  MatCardModule,
  MatExpansionModule,
  MatButtonModule,
  MatIconModule
];

export const MODULES = [

];

export const SERVICES = [
  CityWeatherService
];

export const MAPPERS = [

];

export const PIPES = [
  TemperatureConverterPipe
];
