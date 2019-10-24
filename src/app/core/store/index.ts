import { CoreEffects } from './core.effects';
import * as fromCore from './core.reducer';

export * from './core.state';
export * from './core.actions';
export * from './core.effects';
export * from './core.reducer';

export const effects = [CoreEffects];

export const reducer = fromCore.reducer;
