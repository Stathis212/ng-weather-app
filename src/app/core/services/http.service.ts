import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueryParam } from '@shared/models/query-param.model';

import { Configuration } from '../config';

import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient, private configuration: Configuration) {}

  public fetch(endpoint: string, queryParams?: QueryParam[], weatherType?: string): Observable<any> {
    endpoint = weatherType === undefined ? endpoint : endpoint + '/' + weatherType;
    return this.http.get(this.configuration.serverContext + endpoint, {
      params: this.buildSearchParams(queryParams)
    });
  }

  public delete(endpoint: string): Observable<any> {

    return this.http.delete(this.configuration.serverContext + endpoint);
  }

  public put(endpoint: string, object: any): Observable<any> {
    return this.http.put(this.configuration.serverContext + endpoint, object);
  }

  public post(endpoint: string, object: any): Observable<any> {
    return this.http.post(this.configuration.serverContext + endpoint, object);
  }

  private buildSearchParams(queryParams: QueryParam[]): HttpParams {
    queryParams = queryParams || [];
    let searchParams = new HttpParams();
    queryParams.forEach((param, index, array) => {
      searchParams = searchParams.set(param.key, param.value);
    });
    return searchParams;
  }
}
