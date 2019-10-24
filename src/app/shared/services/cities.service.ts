import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '@shared/models';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CitiesService {

  constructor( private http: HttpClient ) {}

  public getCities(): Observable<City[]> {
    return this.http.get('assets/resources/city-list-compact.json').pipe(
      map(response => (response as City[]))
    );
  }

}
