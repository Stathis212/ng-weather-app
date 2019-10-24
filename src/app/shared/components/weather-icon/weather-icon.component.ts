import { Component, Input } from '@angular/core';

@Component({
  selector: 'wa-weather-icon',
  templateUrl: './weather-icon.component.html'
})
export class WeatherIconComponent {

  @Input() public weather: string;

  constructor() {}
}
