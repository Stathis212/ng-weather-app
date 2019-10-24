import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { City } from '@shared/models';
import { CitiesService } from '@shared/services/cities.service';
import { CountriesService } from '@shared/services/countries.service';

import * as fromCore from './core.actions';

import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class CoreEffects {

  /*===========================================================================
    CLEAR ALL DATA
  ===========================================================================*/

  @Effect()
  loadCities$ = this.actions$.pipe(
    ofType(fromCore.LOAD_CITIES),
    switchMap(() => {
      return this.citiesService.getCities().pipe(
        map(cityList => new fromCore.LoadCitiesSuccess(cityList)),
        catchError(error => {
          return of(new fromCore.LoadCitiesFailure());
        })
      );
    })
  );

  @Effect({ dispatch: false })
  setSelectedCity$ = this.actions$.pipe(
    ofType(fromCore.SET_SELECTED_CITY),
    map((action: any) => action.payload),
    tap((city: City) => {
      this.router.navigate(['/city/' + city.name]);
    })
  );

  @Effect()
  loadCountries$ = this.actions$.pipe(
    ofType(fromCore.LOAD_COUNTRIES),
    switchMap(() => {
      return this.countriesService.getCountries().pipe(
        map(countryList => new fromCore.LoadCountriesSuccess(countryList)),
        catchError(error => {
          return of(new fromCore.LoadCountriesFailure());
        })
      );
    })
  );

  constructor( private actions$: Actions,
               private router: Router,
               private citiesService: CitiesService,
               private countriesService: CountriesService ) { }

}
