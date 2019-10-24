import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {

  public get serverContext(): string {
    return this._serverContext;
  }

  private _serverContext = 'http://api.openweathermap.org/data/2.5/';
}
