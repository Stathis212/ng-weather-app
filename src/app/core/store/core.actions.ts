import { Action } from '@ngrx/store';
import { City } from '@shared/models';
import { Country } from '@shared/models/country.model';

/* ==========================================================================
  TYPES
========================================================================== */

export const LOAD_CITIES = '[CORE] Load cities';
export const LOAD_CITIES_SUCCESS = '[CORE] Load cities success';
export const LOAD_CITIES_FAILURE = '[CORE] Load cities failure';

export const LOAD_COUNTRIES = '[CORE] Load countries';
export const LOAD_COUNTRIES_SUCCESS = '[CORE] Load countries success';
export const LOAD_COUNTRIES_FAILURE = '[CORE] Load countries failure';

export const SET_SELECTED_CITY = '[CORE] Set selected city';
export const SET_SELECTED_COUNTRY = '[CORE] Set selected country';

export const CLEAR_ALL_DATA = '[CORE] Clear all data';

/* ==========================================================================
  CLASSES
========================================================================== */

export class LoadCountries implements Action {

  readonly type = LOAD_COUNTRIES;
}

export class LoadCountriesSuccess implements Action {

  readonly type = LOAD_COUNTRIES_SUCCESS;

  constructor(public payload: Country[]) {}
}

export class LoadCountriesFailure implements Action {

  readonly type = LOAD_COUNTRIES_FAILURE;
}

export class LoadCities implements Action {

  readonly type = LOAD_CITIES;
}

export class LoadCitiesSuccess implements Action {

  readonly type = LOAD_CITIES_SUCCESS;

  constructor(public payload: City[]) {}
}

export class LoadCitiesFailure implements Action {

  readonly type = LOAD_CITIES_FAILURE;
}

export class SetSelectedCountry implements Action {

  readonly type = SET_SELECTED_COUNTRY;

  constructor(public payload: Country) { }
}

export class SetSelectedCity implements Action {

  readonly type = SET_SELECTED_CITY;

  constructor(public payload: City) { }
}

export class ClearAllData implements Action {

  readonly type = CLEAR_ALL_DATA;
}

/* ==========================================================================
  ACTIONS
========================================================================== */

export type CoreActions = LoadCountries |
                          LoadCountriesSuccess |
                          LoadCountriesFailure |
                          LoadCities |
                          LoadCitiesSuccess |
                          LoadCitiesFailure |
                          SetSelectedCity |
                          SetSelectedCountry |
                          ClearAllData;
