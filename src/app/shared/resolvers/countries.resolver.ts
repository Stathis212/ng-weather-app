import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Country } from '@shared/models/country.model';
import { CountriesService } from '@shared/services/countries.service';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesResolver implements Resolve<Array<Country>> {

  constructor( private countriesService: CountriesService,
               private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Country[]
    | Observable<Country[]>
    | Promise<Country[]> {

    return this.countriesService.getCountries().pipe(
      map(countries => {
        return countries;
      }),
      catchError(error => {
        this.router.navigate(['/']);
        return [];
      })
    );
  }
}
