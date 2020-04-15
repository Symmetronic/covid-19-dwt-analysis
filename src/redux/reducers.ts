import { combineReducers } from 'redux';

import { data, DataState } from './data/reducers';

/**
 * Interface of the root state.
 */
export interface RootState {
  data: DataState,
}

/**
 * The main reducer combining all reducers that change different parts of the
 * app's global state.
 */
export const root = combineReducers({
  data,
});
