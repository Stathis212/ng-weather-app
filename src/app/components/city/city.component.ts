import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CityFacade } from './city.facade';

import { first } from 'rxjs/operators';

@Component({
  selector: 'wa-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  providers: [CityFacade]
})
export class CityComponent implements OnInit {

  selectedCity$ = this.facade.selectedCity$;
  selectedCountry$ = this.facade.selectedCountry$;

  constructor( private facade: CityFacade,
               private router: Router ) {}

  ngOnInit(): void {
    this.selectedCity$.pipe(first()).subscribe(city => {
      if (!city) {
        this.router.navigate(['home']);
      }
    });
  }

}
