import { Injectable } from '@angular/core';
import * as fromCoreActions from '@core/store/core.actions';
import * as fromCoreState from '@core/store/core.state';
import { Store } from '@ngrx/store';
import { City } from '@shared/models';
import { Country } from '@shared/models/country.model';

@Injectable()
export class HomeFacade {

  constructor(private store: Store<fromCoreState.CoreState>) {}

  public setSelectedCountry(country: Country): void {

    this.store.dispatch(new fromCoreActions.SetSelectedCountry(country));
  }

  public setSelectedCity(city: City): void {

    this.store.dispatch(new fromCoreActions.SetSelectedCity(city));
  }

}
