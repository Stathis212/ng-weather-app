import { createFeatureSelector } from '@ngrx/store';
import { City } from '@shared/models';
import { Country } from '@shared/models/country.model';

export interface CoreState {
  countryList: Country[];
  cityList: City[];
  selectedCountry: Country;
  selectedCity: City;
}

export const getCoreState =  createFeatureSelector<CoreState>('core');
