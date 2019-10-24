
import * as fromCoreActions from './core.actions';
import { CoreState } from './core.state';

export const initialState: CoreState = {
  countryList: [],
  cityList: [],
  selectedCity: null,
  selectedCountry: null
};

export function reducer(state: CoreState = initialState, action: fromCoreActions.CoreActions): CoreState {

  switch (action.type) {

    case fromCoreActions.LOAD_CITIES_SUCCESS: {
      return {
        ...state,
        cityList: action.payload
      };
    }

    case fromCoreActions.LOAD_COUNTRIES_SUCCESS: {
      return {
        ...state,
        countryList: action.payload
      };
    }

    case fromCoreActions.SET_SELECTED_CITY: {
      return {
        ...state,
        selectedCity: action.payload
      };
    }

    case fromCoreActions.SET_SELECTED_COUNTRY: {
      return {
        ...state,
        selectedCountry: action.payload
      };
    }

    case fromCoreActions.CLEAR_ALL_DATA: {
      return initialState;
    }

  }

  return state;

}
