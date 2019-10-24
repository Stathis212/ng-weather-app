import { createSelector } from '@ngrx/store';

import { CoreState, getCoreState } from './core.state';

/* ==========================================================================
  CORE SELECTORS
========================================================================== */

export const getCoreData = createSelector(getCoreState, (state: CoreState) => state);

export const getCountryList = createSelector(getCoreData, (state: CoreState) => state.countryList);

export const getCityList = createSelector(getCoreData, (state: CoreState) => state.countryList);

export const getSelectedCountry = createSelector(getCoreData, (state: CoreState) => state.selectedCountry);

export const getSelectedCity = createSelector(getCoreData, (state: CoreState) => state.selectedCity);
