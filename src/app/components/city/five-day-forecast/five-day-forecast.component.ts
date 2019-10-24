import { Component, Input, OnInit } from '@angular/core';
import { City, Country, ForecastModel } from '@shared/models';

import { CityFacade } from '../city.facade';

import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'wa-city-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.scss'],
  providers: [CityFacade]
})
export class CityFiveDayForecastComponent implements OnInit {

  @Input() public city: City;
  @Input() public country: Country;

  fiveDayForecast$ = this.facade.fiveDayForecast$;

  fiveDayForecast: ForecastModel;

  step = 0;

  constructor( private facade: CityFacade ) {}

  ngOnInit(): void {
    if (this.city) {
      this.facade.getCityFiveDayForesecast(this.city.name);
    }
    this.fiveDayForecast$.pipe(distinctUntilChanged()).subscribe((forecast: ForecastModel) => {
      this.fiveDayForecast = forecast;
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
