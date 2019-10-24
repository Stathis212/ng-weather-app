import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { City } from '@shared/models';
import { CitiesService } from '@shared/services/cities.service';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitiesResolver implements Resolve<Array<City>> {

  constructor( private citiesService: CitiesService,
               private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): City[]
    | Observable<City[]>
    | Promise<City[]> {

    return this.citiesService.getCities().pipe(
      map(data => {
        return data;
      }),
      catchError(error => {
        this.router.navigate(['/']);
        return [];
      })
    );
  }
}
