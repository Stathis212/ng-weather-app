import { CityEffects } from './city.effects';
import * as fromCity from './city.reducer';

export * from './city.state';
export * from './city.actions';
export * from './city.effects';
export * from './city.reducer';

export const effects = [CityEffects];

export const reducer = fromCity.reducer;
