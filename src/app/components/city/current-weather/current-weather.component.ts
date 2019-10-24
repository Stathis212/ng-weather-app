import { Component, Input, OnInit } from '@angular/core';
import { City, CityWeatherModel, Country } from '@shared/models';

import { CityFacade } from '../city.facade';

import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'wa-city-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  providers: [CityFacade]
})
export class CityCurrentWeatherComponent implements OnInit {

  @Input() public city: City;
  @Input() public country: Country;

  currentWeather$ = this.facade.currentWeather$;

  currentWeather: CityWeatherModel;

  infoItems: string[] = ['Temperature', 'Humidity'];

  constructor( private facade: CityFacade ) {}

  ngOnInit(): void {
    if (this.city) {
      this.facade.getCityWeather(this.city.name);
    }
    this.currentWeather$.pipe(distinctUntilChanged()).subscribe((weather: CityWeatherModel) => {
      this.currentWeather = weather;
    });
  }

}
