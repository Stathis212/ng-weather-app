import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '@shared/models/country.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CountriesService {

  constructor( private http: HttpClient ) {}

  public getCountries(): Observable<Country[]> {
    return this.http.get('assets/resources/country-list-compact.json').pipe(
      map(response => (response as Country[]))
    );
  }

}

