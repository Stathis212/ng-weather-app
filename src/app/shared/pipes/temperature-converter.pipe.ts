import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

  transform(value: number, unit: string) {

    if (value) {
      let temperature = 0;
      if (unit === 'C') {
        temperature = (value - 32) / 1.8 ;
        return temperature.toFixed(2);
      }
      if (unit === 'F') {
        temperature = (value * 32) + 1.8 ;
        return temperature.toFixed(2);
      }
    }
    return;
  }

}
