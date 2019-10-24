import { Component, Input } from '@angular/core';

@Component({
  selector: 'wa-weather-info-item',
  templateUrl: './weather-info-item.component.html',
  styleUrls: ['./weather-info-item.component.scss']
})
export class WeatherInfoItemComponent {

  @Input() public itemType: string;
  @Input() public value: string;

  constructor() {}
}
